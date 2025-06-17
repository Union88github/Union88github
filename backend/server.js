const fastify = require('fastify')({ logger: true });
const { placeholderProducts, getProductById } = require('./placeholderData'); // Using the converted JS file

const PORT = process.env.PORT || 3001;

// Configure CORS - A very important step for local development with separate frontend/backend
fastify.register(require('@fastify/cors'), {
  origin: (origin, cb) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if(!origin) return cb(null, true);
    // For local dev, allow common frontend ports.
    // In production, this should be your actual frontend domain.
    const allowedOrigins = ['http://localhost:3000', 'http://127.0.0.1:3000'];
    if(allowedOrigins.includes(origin)){
      return cb(null, true);
    }
    return cb(new Error("Not allowed by CORS"), false);
  },
  methods: ['GET']
});

// GET all products
fastify.get('/api/products', async (request, reply) => {
  reply.send(placeholderProducts);
});

// GET single product by ID
fastify.get('/api/products/:id', async (request, reply) => {
  const productId = request.params.id;
  const product = getProductById(productId);

  if (product) {
    reply.send(product);
  } else {
    reply.code(404).send({ message: 'Product not found', id: productId });
  }
});

const start = async () => {
  try {
    await fastify.listen({ port: PORT, host: '0.0.0.0' }); // Listen on all available network interfaces
    // fastify.log.info(`Server listening on ${fastify.server.address().port}`); // .address() is available after server is listening
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Moved log info here as server.address() is only available after await fastify.listen() completes
  console.log(`Server listening on port ${PORT}. Access URLs like http://localhost:${PORT}/api/products`);
};

start();
