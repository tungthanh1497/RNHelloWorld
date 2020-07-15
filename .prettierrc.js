module.exports = {
  bracketSpacing: false,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',

  // Format a file on save. A formatter must be available, the file must not be auto-saved, and editor must not be shutting down.
  'editor.formatOnSave': true,
  // Enable/disable default JavaScript formatter (For Prettier)
  'javascript.format.enable': false,
  // Use 'prettier-eslint' instead of 'prettier'. Other settings will only be fallbacks in case they could not be inferred from eslint rules.
  'prettier.eslintIntegration': true,
};
