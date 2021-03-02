<template>
<div class="mt-5">
  <p v-if="$fetchState.pending">Fetching mountains...</p>

  <div v-else-if="$fetchState.error" class="bg-red-500 text-white p-2 font-semibold">
    Error :(
  </div>

  <p v-else class="mb-2 px-4 py-2 bg-gray-200 cursor-pointer" @click="$router.push(`/todos/${todo.id}`)" v-for="todo in todos" :key="todo.id">{{todo.title}} </p>

</div>
</template>

<script>
import todos from "@/apis/todos";
export default {
name: "index",
  layout:'Base',
  data(){
  return{
    data:[]
  }
  },
  created() {

  },
  watch:{
    data(){
      this.$store.dispatch('todos/GET_DATA',this.data)
    }
  },
  computed:{
    todos(){
      return this.$store.getters['todos/todos']
    }
  },
   async fetch() {
     let res=await todos(this.$axios).getAll()
     this.data=res

  },
}
</script>

<style scoped>

</style>
