module.exports = {
  devServer: {
    historyApiFallback: true,
    port: 8000,
    proxy: {
      '*': 'http://localhost:3000',
    },
  },
}
