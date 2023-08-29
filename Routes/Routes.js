const Product = require('../models/productModel')
async function routes(fastify,options){

    fastify.get('/', async function handler(request,reply){
        reply.send({hello:'world'}) 
    })

    fastify.post('/product', async function handler(request,reply){

        try {
            const product = await Product.create(request.body)
            reply.send(200).json(product)
        } catch (error) {
            console.log(error.message)
            reply.send(500).json({message:error.message})
        }

    })
}

module.exports = routes