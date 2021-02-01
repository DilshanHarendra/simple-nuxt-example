<template>
  <div class="bg-gray-100">
    <TheHeader/>
    <div class="container  mx-auto">
      <Nuxt/>

    </div>
  </div>

</template>

<script>
import TheHeader from "~/components/layout/Base/TheHeader";
export default {
  name: "Base",
  components: {TheHeader}
}
</script>

<style scoped>

</style>
