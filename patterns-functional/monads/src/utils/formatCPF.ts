import { Contact } from "../services/api";

export const formatCPF = (obj: Contact) => {
  return {
    ...obj,
    cpf: obj.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
  }
}