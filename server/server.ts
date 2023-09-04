import Fastify, { FastifyInstance, RouteShorthandOptions } from "fastify";
import mainPlugin from "./mainPlugin.js";
import pingPlugin from "./pingPlugin.js";
import cors from "@fastify/cors";

const server: FastifyInstance = Fastify({ logger: true });

server.register(cors, { origin: true, methods: "GET" });
server.register(mainPlugin);
server.register(pingPlugin);

const start = async () => {
  try {
    await server.listen({ port: 3000 });

    const address = server.server.address();
    const port = typeof address === "string" ? address : address?.port;
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
