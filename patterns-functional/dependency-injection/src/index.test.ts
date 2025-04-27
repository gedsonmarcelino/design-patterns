import {ApiRepository, DbRepository} from "./repositories";
import {Service} from "./services ";

describe('Adapter Pattern', () => {
  it('should get data from api', async () => {
    const result = await Service(ApiRepository).getUser('1');
    expect(result).toEqual({
      id: "1",
      name: 'Test 1',
      price: 100,
    });
  })  
  it('should get data from db', async () => {
    const result = await Service(DbRepository).getUser('123');
    expect(result).toEqual({
      id: "123",
      name: 'Test 123',
      price: 123,
    });
  })  
});