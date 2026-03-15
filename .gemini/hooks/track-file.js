/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

let inputData = '';

process.stdin.on('data', (chunk) => {
  inputData += chunk;
});

process.stdin.on('end', () => {
  try {
    const input = JSON.parse(inputData);
    const filePath = input.tool_input?.file_path;

    if (filePath) {
      const projectDir = process.env.GEMINI_PROJECT_DIR || process.cwd();
      const tmpDir = path.join(projectDir, '.gemini', 'tmp');
      const trackFile = path.join(tmpDir, 'modified_files.txt');

      if (!fs.existsSync(tmpDir)) {
        fs.mkdirSync(tmpDir, { recursive: true });
      }

      fs.appendFileSync(trackFile, filePath + '\n', 'utf8');
    }
    // Successfully tracked, exit 0. stdout is empty (no JSON needed if no changes required).
    process.exit(0);
  } catch (err) {
    process.stderr.write(`[Hook: track-file] Error tracking file: ${err.message}\n`);
    process.exit(1); // Warning status
  }
});
