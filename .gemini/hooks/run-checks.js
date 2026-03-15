/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectDir = process.env.GEMINI_PROJECT_DIR || process.cwd();
const trackFile = path.join(projectDir, '.gemini', 'tmp', 'modified_files.txt');

// Helper to log to stderr so it shows up in Gemini CLI
const log = (msg) => process.stderr.write(`[Hook: run-checks] ${msg}\n`);
const error = (msg) => process.stderr.write(`[Hook: run-checks] ERROR: ${msg}\n`);

if (!fs.existsSync(trackFile)) {
  process.exit(0);
}

try {
  log('AI finished modifying files. Running checks...');
  const content = fs.readFileSync(trackFile, 'utf8');
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

    log(`Formatting: ${file}`);
    try {
      const formatOut = execSync(`pnpm prettier --write "${absolutePath}"`, { cwd: projectDir });
      if (formatOut.toString().trim()) log(formatOut.toString().trim());
    } catch (e) {
      error(`Prettier failed for ${file}:\n${e.stdout?.toString() || e.message}`);
    }

    if (['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs'].includes(ext)) {
      log(`Linting: ${file}`);
      try {
        const lintOut = execSync(`pnpm eslint --fix "${absolutePath}"`, { cwd: projectDir });
        if (lintOut.toString().trim()) log(lintOut.toString().trim());
      } catch (e) {
        error(`ESLint failed for ${file}:\n${e.stdout?.toString() || e.message}`);
      }
    }
  }

  log('Running project-wide typecheck...');
  try {
    const typecheckOut = execSync(`pnpm typecheck`, { cwd: projectDir });
    if (typecheckOut.toString().trim()) log(typecheckOut.toString().trim());
  } catch (e) {
    error(`Typecheck failed:\n${e.stdout?.toString() || e.message}`);
    throw e;
  }

  fs.unlinkSync(trackFile);
  log('✅ All checks passed!');
  process.exit(0);
} catch (err) {
  error('❌ Hooks checks failed. Blocking further actions.');
  if (fs.existsSync(trackFile)) {
    fs.unlinkSync(trackFile);
  }
  // Exit code 2 blocks the agent and shows stderr as the reason
  process.exit(2);
}
