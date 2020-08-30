const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Conexión con MongoDB

mongoose.connect('mongodb://127.0.0.1/mongo-newsletter')
  .then(db => console.log('Db connected'))
  .catch(err => console.log('error conectando mongo: ', err))

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/api/newsletter', (req, res) => {
  console.log(req.body)
  res.status(200).send({message: 'se recibió el POST'})
  res.end();
})
