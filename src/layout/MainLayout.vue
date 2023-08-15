<template>
  <the-nav-bar></the-nav-bar>

  <div class="container with-nav">

    <router-view></router-view>

  </div>
</template>

<script>
import TheNavBar from '../components/TheNavBar.vue';
export default {
  components: { TheNavBar }
}
</script>

<style scoped></style>

