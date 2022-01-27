module.exports = {
  useTabs.false,
  tabWidth: 2,
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  printWidth: 160,
  singleQuote: true,
  semi: false,
  endOfLine:'\n',
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: 'avoid',
};
