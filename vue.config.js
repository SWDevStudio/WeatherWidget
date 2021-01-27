module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
        './src/assets/vars.styl'
      ]
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/'
}
