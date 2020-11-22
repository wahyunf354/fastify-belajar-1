async function routes(fastify, options, done) {
  
  const opts = {
    schema: {
      body: {
        type: 'object',
        properties: {
          id: {type: 'number'},
          key: {type: 'number'}
        }
      },
      querystring: {
        type: 'object',
        properties: {
          id: {type: 'number'}
        }
      }
    }
  }
  
  fastify.get("/", async (request, reply) => {
    return { hello: "world" };
  });

  fastify.post("/hello/:id",opts, async (req, rep) => {
    const data = req.body.key;

    return { hello: data };
  });

  done()
}

module.exports = routes;
