import theme from '@nuxt/content-theme-docs'

export default theme({
  i18n: {
    locales: () => [{
      code: 'id',
      iso: 'id-ID',
      file: 'id-ID.js',
      name: 'Indonesia'
    }, {
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    defaultLocale: 'en',
    langDir: '../../../../lang/'
  },
  docs: {
    primaryColor: '#06bbd3',
  },
  loading: {
    color: '#06bbd3'
  }
})
