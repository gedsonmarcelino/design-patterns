import {IRepository} from "../types/repository"
import {MOCK_API_DATA, MOCK_DB_DATA} from "./mockData"



export const ApiRepository : IRepository = {
  getById: async (id: string) => {
    return Promise.resolve(MOCK_API_DATA.find((item) => item.id === id)) || undefined
  }
}

export const DbRepository : IRepository = {
  getById: async (id: string) => {
    return Promise.resolve(MOCK_DB_DATA.find((item) => item.id === id)) || undefined
  }
}
