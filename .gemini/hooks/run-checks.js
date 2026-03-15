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

  const validFiles = [];
  const lintableFiles = [];

  for (const file of files) {
    const absolutePath = path.resolve(projectDir, file);
    const relativePath = path.relative(projectDir, absolutePath);
    const ext = path.extname(absolutePath);

    // Skip files outside the project directory
    if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
      continue;
    }

    // Skip .gemini and .next directories
    if (relativePath.startsWith('.gemini') || relativePath.startsWith('.next')) {
      continue;
    }

    if (!fs.existsSync(absolutePath)) {
      continue;
    }

    validFiles.push(absolutePath);
    if (['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs'].includes(ext)) {
      lintableFiles.push(absolutePath);
    }
  }

  if (validFiles.length > 0) {
    log(`Formatting ${validFiles.length} file(s)...`);
    try {
      const formatOut = execSync(
        `pnpm prettier --write ${validFiles.map((f) => `"${f}"`).join(' ')}`,
        { cwd: projectDir },
      );
      if (formatOut.toString().trim()) log(formatOut.toString().trim());
    } catch (e) {
      error(`Prettier failed:\n${e.stdout?.toString() || e.message}`);
    }
  }

  if (lintableFiles.length > 0) {
    log(`Linting ${lintableFiles.length} file(s)...`);
    try {
      const lintOut = execSync(
        `pnpm eslint --fix ${lintableFiles.map((f) => `"${f}"`).join(' ')}`,
        { cwd: projectDir },
      );
      if (lintOut.toString().trim()) log(lintOut.toString().trim());
    } catch (e) {
      error(`ESLint failed:\n${e.stdout?.toString() || e.message}`);
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
