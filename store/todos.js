import todos from "@/apis/todos";

const init= {
todos:[],
  todo_full:[],
}
export default {
  state:init,
  namespaced:true,
  mutations:{
    setTodos(state,payload){
      state.todos=payload.todos
    },
    setTodo(state,payload){
      state.todo_full.push(payload.todo)
    }
  },
  actions:{
  GET_DATA:function ({commit},data){

    commit('setTodos',{todos:data})
  },
    GET_BY_ID:function ({commit,getters},id,state){
    return new Promise(((resolve, reject) => {
      console.log(getters.todos)
      todos(this.$axios).getById(id).then(data=>{
        commit('setTodo',{todo:data})
          resolve(data)
      }).catch(err=>reject(err))

    }))

    }
  },
  getters:{
    todos(state){
      return  state.todos
    },
    todo:(state)=>id=>{
      return state.todo_full.find(todo=>todo.id==id)
    }
  }
}
