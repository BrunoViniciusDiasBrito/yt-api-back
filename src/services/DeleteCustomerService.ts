import prismaClient from '../prisma'

class DeleteCustomerService {
  async execute (id: string) {
    if (!id) {
      throw new Error("Solicitação inválida")
    }

    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id: id
      }
    })

    if (!findCustomer) {
      throw new Error("Cliente não existe")
    }

    await prismaClient.customer.delete({
      where: {
        id: findCustomer.id
      }
    })

    return { message: "Deletado com sucesso!" }
  }
}

export { DeleteCustomerService }