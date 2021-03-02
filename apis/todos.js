export default ($axios,$store) => ({
  getAll() {
    return $axios.$get('/todos')
  },
  getById(id) {
    return $axios.$get(`/todos/${id}`)
  },


})

