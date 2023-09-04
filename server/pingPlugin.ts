import { FastifyInstance, RouteShorthandOptions } from "fastify";

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          pong: {
            type: "string",
          },
        },
      },
    },
  },
};

export default async function routes(fastify: FastifyInstance) {
  fastify.get("/ping", opts, async () => {
    return { pong: "it worked!" };
  });
}
