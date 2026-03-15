module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{ts,tsx}': () => 'pnpm typecheck',
  '*.{json,css,md}': ['prettier --write'],
};
