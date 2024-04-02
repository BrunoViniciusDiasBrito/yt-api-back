export interface ICustomerServices {
  execute: (name:string, email: string) => Promise<{}>
}