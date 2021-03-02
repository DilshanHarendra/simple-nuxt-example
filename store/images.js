const init= {
  images:[]
}
export default {
  state:init,
  namespaced:true,
  mutations:{
    setImages(state,payload){
      state.images=payload.images
    }
  },
  actions:{
    GET_DATA:function ({commit},data){

      commit('setImages',{images:data})
    }
  },
  getters:{
    images(state){
      return  state.images
    }
  }
}
