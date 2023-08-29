// Require the framework and instantiate it
const fastify = require('fastify')({ logger: false })
const mongoose = require('mongoose')
const PORT = 3000
fastify.register(require('@fastify/formbody'))

mongoose
    .connect('mongodb+srv://root:admin@apidevtest.i0vulw6.mongodb.net/Node-API?retryWrites=true&w=majority')
    .then(()=>{
        console.log('connected!')
    })
    .catch((error)=>{
        console.log(error)
    })
    
//routes
fastify.register(require('./routes/routes'))

// Run the server!
fastify.listen({ port: PORT }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})