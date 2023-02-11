import { loadDataById } from "./services/api";
import { formatName } from "./utils/formatName";
import { formatPhone } from "./utils/formatPhone";

describe('Monad Pattern', () => {
  it('should load by id', async () => {
    const result = (await loadDataById(1)).get();

    expect(result.id).toBe(1);
    expect(result.name).toBe('Gedson Marcelino')
  })

  it('should format phone number', async () => {
    const result = (await loadDataById(1))
      .map(formatPhone)
      .get();

    expect(result.phone).toBe('+55 (88) 91234-1234')
  })

  it('should transform name to upper case', async () => {
    const result = (await loadDataById(1))
      .map(formatName)
      .get();

    expect(result.name).toBe('GEDSON MARCELINO')
  })

  it('should format name and phone', async () => {
    const result = (await loadDataById(1))
      .map(formatName)
      .map(formatPhone)
      .get();

    expect(result.name).toBe('GEDSON MARCELINO')
    expect(result.phone).toBe('+55 (88) 91234-1234')
  })
});