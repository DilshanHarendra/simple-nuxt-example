<template>
  <div>
    <h1>About us</h1>
    <div  class="grid md:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-4">
      <div v-for="image in images" :key="images.id" class="w-full h-48 py-2 pb-4">
        <img  :src="image.urls.full" alt="" class="h-48 w-full object-cover" >
      </div>


    </div>
  </div>

</template>

<script>
export default {
name: "index",
  layout:'Base',
  computed:{
    images(){
      return this.$store.getters['images/images']
    }
  }
}
</script>

<style scoped>

</style>
