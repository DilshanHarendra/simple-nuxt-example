
<template>
<div>
  <p v-if="$fetchState.pending">Fetching Images...</p>

  <div v-else-if="$fetchState.error" class="bg-red-500 text-white p-2 font-semibold">
    Error :(
  </div>
  <div v-else-if="data.length>0" class="grid md:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-4">
    <div  v-for="image in data" :key="data.id" class="w-full h-48 py-2 pb-4">
      <img  :src="image.urls.full" alt="" class="h-48 w-full object-cover" >
    </div>


  </div>

</div>


</template>

<script>
import axios from "axios";

export default {
  name: "index",
  layout:'Base',
  data(){
    return{
      data:[]
    }
  },
  watch: {
    data(){
      this.$store.dispatch('images/GET_DATA',this.data)
    }
  },
  async fetch() {
      let res =await axios.get(`https://api.unsplash.com/search/photos?client_id=${process.env.VUE_APP_UNPLASH_API_KEY}&query=girl&per_page=12`)
      this.data=res.data.results

  },
}
</script>

<style scoped>

</style>
