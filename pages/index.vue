<template>
<div class="w-full h-full">
  <NuxtLink class="text-center block text-3xl text-underline text-blue-500" to="/users">Go to Users</NuxtLink>
</div>
</template>

<script>
export default {
  layout:'Base',
  data(){
    return{
      rowOptions: {
        slidesPerView: 5,
        spaceBetween: 20,
        freeMode: true,

        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
    }
  },
  computed:{

  }
}
</script>

<style>

</style>
