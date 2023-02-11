// Service
exports.Service = (repo) => {
  return {
    getUser: () => {
      return repo.getById('123');
    }
  }
}