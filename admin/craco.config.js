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
          '@services': './src/services',
          '@styles': './src/styles'
        },
      },
    },
  ],
};
