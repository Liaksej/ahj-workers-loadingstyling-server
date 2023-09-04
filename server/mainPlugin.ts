import { FastifyInstance } from "fastify";
import { generateData } from "./fakerFabric.js";
import { promisify } from "util";

const sleep = promisify(setTimeout);

export default async function routes(fastify: FastifyInstance) {
  fastify.get("/", async () => {
    await sleep(2000);
    return generateData();
  });
}
