<template>
  <div class="bg-gray-100">
    <TheHeader/>
    <div class="container  mx-auto">
      <Nuxt keep-alive/>

    </div>
  </div>

</template>

<script>
import TheHeader from "~/components/layout/Base/TheHeader";
export default {
  name: "Base",
  components: {TheHeader},
  created() {
    this.$axios.setHeader('Authorization', '123')
  }
}
</script>

<style scoped>

</style>
