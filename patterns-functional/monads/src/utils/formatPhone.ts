import { Contact } from "../services/api";


export const formatPhone = (obj: Contact) => {
  return {
    ...obj,
    phone: obj.phone.replace(/(\d{2})(\d{5})(\d{4})/, "+55 ($1) $2-$3")
  }
}