import { Contact } from "../services/api";

type MapFunction = (obj: Contact) => Contact;

export const formatter = (obj: Contact) => ({
  map: (fn: MapFunction) => formatter(fn(obj)),
  get: () => obj
})