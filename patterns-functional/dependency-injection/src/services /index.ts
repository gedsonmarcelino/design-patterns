import {IRepository} from "../types/repository";

export const Service = (repo:IRepository ) => {
  return {
    getUser: (id:string) => {
      return repo.getById(id);
    }
  }
}