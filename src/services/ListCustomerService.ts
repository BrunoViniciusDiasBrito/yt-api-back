import { IListCustomerService } from '../interfaces/IListCustomerService'
import prismaClient from '../prisma'

class ListCustomerService implements IListCustomerService {
  async execute () {
    const customers = await prismaClient.customer.findMany()

    return customers
  }
}

export { ListCustomerService }