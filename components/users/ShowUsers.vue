<template>
  <div class="px-3 py-4 flex justify-center">
    <table class="w-full text-md bg-white shadow-md rounded mb-4">
      <thead>
      <tr class="border-b">
        <th class="text-left p-3 px-5">Name</th>
        <th class="text-left p-3 px-5">Age</th>
        <th class="text-left p-3 px-5">Email</th>
        <th class="text-left p-3 px-5">Role</th>
        <th></th>
      </tr>
      </thead>
      <tbody>

      <tr v-for="user in users" :key="user.id" class="border-b hover:bg-orange-100 bg-gray-100">
        <td class="p-3 px-5">{{user.name}}</td>
        <td class="p-3 px-5">{{user.age}}</td>
        <td class="p-3 px-5">{{user.email}}</td>
        <td class="p-3 px-5">
          <select :value="user.role" class="bg-transparent">
            <option value="2">user</option>
            <option value="1">admin</option>
          </select>
        </td>
        <td class="p-3 px-5 flex justify-end">
          <button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button>
          <button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
        </td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
export default {
name: "ShowUsers",
  computed:{
  users(){
    return this.$store.getters['users/users']
  }
  }
}
</script>

<style scoped>

</style>
