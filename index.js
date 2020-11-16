// Require the framework and instantiate it

const { default: fastify } = require("fastify");

const app = require("fastify")({ logger: true });

// Register Route
app.register(require("./our-first-route"));

// Run the server!
const start = async () => {
  try {
    await app.listen(3000, "0.0.0.0");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
