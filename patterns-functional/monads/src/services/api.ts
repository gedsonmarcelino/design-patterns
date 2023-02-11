import { formatter } from "../utils/formatter";

export type Contact = {
  id: number;
  name: string;
  phone: string;
}

export const loadDataById = async (id:number) => {
  const response = await Promise.resolve({
    id:1,
    name: "Gedson Marcelino",
    phone: "88912341234"
  })

  return formatter(response);
}