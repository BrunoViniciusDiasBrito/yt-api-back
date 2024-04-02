import prismaClient from '../prisma'
import { ICustomerServices } from '../interfaces/ICustomerServices'

class CreateCustomerService implements ICustomerServices {
  async execute (name:string, email:string) {
    if (!name || !email) {
      throw new Error("Preencha todos os campos")
    }

    const customer = await prismaClient.customer.create({
      data: {
        name,
        email,
        status: true
      }
    })

    return customer
  }
}

export { CreateCustomerService }