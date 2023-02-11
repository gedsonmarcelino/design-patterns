// Api Repository
exports.ApiRepository = {
  getById: (id) => {
    return {
      name: 'Test 1'
    }
  }
}

// Db Repository
exports.DbRepository = {
  getById: (id) => {
    return {
      name: 'Test 2'
    }
  }
}
