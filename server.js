// Require the framework and instantiate it
const fastify = require('fastify')({ logger: false })
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
fastify.register(require('@fastify/formbody'))


mongoose
    .connect(process.env.CONECTION_STRING)
    .then(()=>{
        console.log('connected!')
    })
    .catch((error)=>{
        console.log(error)
    })
    
//routes
fastify.register(require('./routes/routes'))

// Run the server!
fastify.listen({ port: process.env.PORT }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})