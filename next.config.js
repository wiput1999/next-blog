const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript({
  async exportPathMap () {
    return  {
      '/': { page: '/' }
    }
  }
})
