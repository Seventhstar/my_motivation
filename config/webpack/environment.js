const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('erb', {
  test: /\.erb$/,
  enforce: 'pre',
  use: [{
    loader: 'rails-erb-loader',
  }]
})
environment.loaders.prepend('vue', vue)
module.exports = environment