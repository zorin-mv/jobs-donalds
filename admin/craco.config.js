const CracoAlias = require('craco-alias');
module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          '@constants': './src/constants',
          '@screens': './src/screens',
          '@components': './src/components',
          '@styles': './src/styles',
          '@assets/*': 'assets/*',
        },
      },
    },
  ],
};
