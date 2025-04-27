export interface IRepository {
  getById: (id: string) =>  Promise<IProduct | undefined> 
}

export interface IProduct {
  id: string
  name: string
  price: number
}