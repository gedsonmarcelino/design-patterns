const { Service } = require('./services')
const { ApiRepository, DbRepository } = require('./repositories')

test("should use ApiRespository", () => {
  const user = Service(ApiRepository).getUser();
  expect(user.name).toBe('Test 1')
});

test("should use DbRespository", () => {
  const user = Service(DbRepository).getUser();
  expect(user.name).toBe('Test 2')
});