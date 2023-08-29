const Product = require('../models/productModel')

async function routes(fastify,options){

    fastify.get('/', async function handler(request,reply){
        reply.send({hello:'world'}) 
    })

    fastify.post('/product', async function handler(request,reply){

        try {
            const product = await Product.create(request.body)
            reply.send(product)
        } catch (error) {
            console.log(error.message)
            reply.send({message:error.message})
        }

    })

    fastify.get('/product', async function handler(request,reply){
        try {
            const products = await Product.find({})
            reply.send(products)
        } catch (error) {
            console.log(error.message)
            reply.send({message:error.message})
        }
    })

    fastify.get('/product/:id', async function handler(request,reply){
        try {
            const {id} = request.params
            const product = await Product.findById(id)
            reply.send(product)
        } catch (error) {
            console.log(error.message)
            reply.send({message:error.message})
        }
    })

    fastify.put('/product/:id', async function handler(request,reply){
        try {
            const {id} = request.params
            const product = await Product.findByIdAndUpdate(id,request.body)
            if(!product){
                return request.code(404).send({message:`cannnot find the ${id} product`})
            }
            const updatedProduct = await Product.findById(id)
            reply.code(200).send(updatedProduct)

        } catch (error) {
            console.log(error.message)
            reply.send({message:error.message})
        }
    })

    fastify.delete('/product/:id', async function handler(require,reply){
        try {
            const {id} = require.params
            const product = await Product.findByIdAndDelete(id)
            if(!product){
                return reply.code(404).send({message:`cannnot find the ${id} product`})
            }
            reply.code(200).send(product)

        } catch (error) {
            console.log(error.message)
            reply.send({message:error.message})
        }
    })
}

module.exports = routes