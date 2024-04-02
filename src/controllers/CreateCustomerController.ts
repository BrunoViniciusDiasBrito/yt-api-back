import { FastifyRequest, FastifyReply } from 'fastify';
import { ICustomerServices } from '../interfaces/ICustomerServices';

class CreateCustomerController {
  private CustomerService: ICustomerServices

  constructor(CustomerService: ICustomerServices) {
    this.CustomerService = CustomerService
  }
  async handle (request: FastifyRequest, reply: FastifyReply) {
    const { name, email } = request.body as { name: string, email: string }
    const customerService = await this.CustomerService.execute(name, email)

    reply.send(customerService)
  }
}

export { CreateCustomerController }