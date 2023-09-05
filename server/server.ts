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
    const port: number = Number(process.env.PORT) || 3000;
    const host: string = "RENDER" in process.env ? `0.0.0.0` : `localhost`;

    await server.listen({ host: host, port: port });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
