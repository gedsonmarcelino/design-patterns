// Api Repository
const ApiRepository = {
  getById: (id) => {
    console.log(`Api: ${id}`);
    return {
      name: 'Test 1'
    }
  }
}

// Db Repository
const DbRepository = {
  getById: (id) => {
    console.log(`Db: ${id}`);
    return {
      name: 'Test 2'
    }
  }
}

// Service
const Service = (repo) => {
  return {
    getUser: () => {
      return repo.getById('123');
    }
  }
}

let user = Service(ApiRepository).getUser();
console.log('Name:', user.name)

user = Service(DbRepository).getUser();
console.log('Name: ', user.name);