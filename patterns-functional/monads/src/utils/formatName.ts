import { Contact } from "../services/api";

export const formatName = (obj: Contact) => {
  return {
    ...obj,
    name: obj.name.toLocaleUpperCase()
  }
}