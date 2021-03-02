<template>
<div>
  <div v-if="loading">
    loading
  </div>
  <div v-else>
    <h1 class="text-2xl font-semibold ">
      Todo   {{$route.params.id}}
    </h1>

    <p :class="todo.completed?'text-red-500':''" class="text-lg">{{todo.title}}</p>

  </div>


</div>
</template>

<script>
export default {
  name: "todo",
  layout:'Base',
  data(){
    return{
      loading:true
    }
  },
  created() {
    if (!this.todo){
      this.$store.dispatch('todos/GET_BY_ID',this.$route.params.id).then(()=>this.loading=false)
    }else{
      this.loading=false
    }
  },
  computed:{
    todo(){
      return this.$store.getters['todos/todo'](this.$route.params.id)
    }
  }
}
</script>

<style scoped>

</style>
