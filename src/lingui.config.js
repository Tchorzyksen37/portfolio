module.exports = {
  locales: ['en', 'pl'],
  sourceLocale: 'en',
  catalogs: [
    {
      path: 'src/locales/{locale}/messages',
      include: ['src'],
      exclude: ['**/node_modules/**']
    }
  ],
  format: 'po'
};
