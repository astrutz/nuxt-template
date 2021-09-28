const app = require('express')()

app.get('/', (req, res) => {
  res.json({
    _links: {
      dmsobjectextensions: {
        href: '/able-nuxt-template/dmsobjectextensions'
      }
    }
  })
})

module.exports = app
