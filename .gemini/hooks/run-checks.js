/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectDir = process.env.GEMINI_PROJECT_DIR || process.cwd();
const trackFile = path.join(projectDir, '.gemini', 'tmp', 'modified_files.txt');

if (!fs.existsSync(trackFile)) {
  process.exit(0);
}

try {
  console.log('AI finished modifying files. Running checks...');
  const content = fs.readFileSync(trackFile, 'utf8');
  // Deduplicate and filter empty lines
  const files = [
    ...new Set(
      content
        .split('\n')
        .map((f) => f.trim())
        .filter(Boolean),
    ),
  ];

  for (const file of files) {
    const ext = path.extname(file);
    const absolutePath = path.resolve(projectDir, file);

    if (!fs.existsSync(absolutePath)) continue;

    console.log(`Formatting: ${file}`);
    try {
      const formatOut = execSync(`pnpm prettier --write "${absolutePath}"`, { cwd: projectDir });
      console.log(formatOut.toString().trim());
    } catch (e) {
      console.error(`Prettier failed for ${file}:\n${e.stdout?.toString() || e.message}`);
    }

    if (['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs'].includes(ext)) {
      console.log(`Linting: ${file}`);
      try {
        const lintOut = execSync(`pnpm eslint --fix "${absolutePath}"`, { cwd: projectDir });
        console.log(lintOut.toString().trim());
      } catch (e) {
        console.error(`ESLint failed for ${file}:\n${e.stdout?.toString() || e.message}`);
      }
    }
  }

  console.log('Running project-wide typecheck...');
  try {
    const typecheckOut = execSync(`pnpm typecheck`, { cwd: projectDir });
    console.log(typecheckOut.toString().trim());
  } catch (e) {
    console.error(`Typecheck failed:\n${e.stdout?.toString() || e.message}`);
    throw e; // Fail the hook if typecheck fails
  }

  fs.unlinkSync(trackFile);
  console.log('All checks passed!');
} catch {
  console.error('Hooks checks failed.');
  if (fs.existsSync(trackFile)) {
    fs.unlinkSync(trackFile);
  }
  process.exit(1);
}
