const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  i18n: {
    locales: ['ptBR', 'ptPT', 'he', 'en'],
    defaultLocale: 'ptBR',
    localeDetection: false,
  },
})
