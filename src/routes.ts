import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { CreateCustomerController } from './controllers/CreateCustomerController';
import { CreateCustomerService } from './services/CreateCustomerService';
import { ListCustomerController } from './controllers/ListCustomersController';
import { DeleteCustomerController } from './controllers/DeleteCustomerController';

export async function routes (fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true }
  })

  fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
    const service = new CreateCustomerService()
    const customer = new CreateCustomerController(service)

    return customer.handle(request, reply)
  })

  fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListCustomerController().handle(request, reply)
  })

  fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteCustomerController().handle(request, reply)
  })
}