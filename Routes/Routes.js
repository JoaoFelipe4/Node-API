async function routes(fastify,options){

    fastify.get('/', async function handler(request,reply){
        reply.send({hello:'world'}) 
    })
}

module.exports = routes