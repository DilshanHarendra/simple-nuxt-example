<template>
<div class="text-gray-900 ">
  <div class="p-4 flex">
    <h1 class="text-3xl flex items-center">
      Users
      <svg @click="model=true" v-tooltip="'Add New User'" class="w-8 h-8 ml-3 mt-1 hover:text-gray-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </h1>
  </div>
  <AddNewUser v-if="model" @close-model="model=false"/>
<ShowUsers/>
</div>


</template>

<script>
import ShowUsers from "~/components/users/ShowUsers";
import AddNewUser from "~/components/users/AddNewUser";
export default {
  components: {AddNewUser, ShowUsers},
  layout: 'Base',
  name: "index",
  data(){
    return{
      model:false
    }
  }
}
</script>

<style scoped>

</style>
