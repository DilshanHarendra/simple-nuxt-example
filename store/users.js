const init={
users:[
  {
    id:1,
    name:"Dilshan",
    age:21,
    email:'dila@gmail.com',
    role:1
  },
  {
    id:2,
    name:"Harendra",
    age:21,
    email: 'harendra@gmail.com',
    role:2
  }
]
}
export default {
  state:init,
  namespaced:true,
  mutations:{
    addUser(state,payload){
      let id= state.users.length
      id++
      state.users.push({...payload.user,id:id})
    }
  },
  actions:{
    ADD_USER:function ({commit},data){
      commit('addUser',{user:data})
    }
  },
  getters:{
    users(state){
      return state.users
    }
  },

}
