<template>
<div class="w-screen h-screen grid place-items-center  absolute top-0 left-0 z-10" style="background-color: rgba(0,0,0,0.8)">
  <div class="md:w-2/4  w-full bg-white p-5 py-8 relative">
    <svg @click="$emit('close-model')" class="absolute top-0 right-0 w-5 h-5 mr-4 mt-4 cursor-pointer hover:text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
    <form @submit="submit"  class="mt-3">
      <label class="block text-sm text-gray-00 mt-3 font-semibold" for="name">Name</label>
      <input v-model="form.name" class="w-full mt-1 px-5 py-2 text-gray-700 bg-gray-200 rounded" id="name"  type="text" required>
      <label class="block text-sm text-gray-00 mt-3 font-semibold" for="email">Email</label>
      <input v-model="form.email" class="w-full mt-1 px-5 py-2 text-gray-700 bg-gray-200 rounded" id="email"  type="email" required>
      <label class="block text-sm text-gray-00 mt-3 font-semibold" for="age">Age</label>
      <input v-model="form.age" class="w-full mt-1 px-5 py-2 text-gray-700 bg-gray-200 rounded" id="age"  type="number" required>
      <label class="block text-sm text-gray-00 mt-3 font-semibold" for="role">Role</label>
      <select v-model="form.role" name="" id="role" class="w-full mt-1 px-5 py-2 text-gray-700 bg-gray-200 rounded" required>
        <option value="2">User</option>
        <option value="1">Admin</option>

      </select>


      <button class="uppercase mt-8 px-8 py-1 w-full border border-blue-600 text-blue-600 max-w-max shadow-sm hover:shadow-lg">button</button>
    </form>
  </div>
</div>
</template>

<script>
export default {
name: "AddNewUser",
  data(){
    return{
      form:{
        name:'',
        age:'',
        email:'',
        role:'',
      }
    }
  },
  methods:{
    submit(e){
      e.preventDefault();
      this.$store.dispatch('users/ADD_USER',this.form)
      this.$emit('close-model')
    }
  }
}
</script>

<style scoped>

</style>
