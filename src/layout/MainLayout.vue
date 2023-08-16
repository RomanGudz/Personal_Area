<template>
  <the-nav-bar></the-nav-bar>

  <div class="container with-nav">
    <app-message />
    <router-view></router-view>

  </div>
</template>

<script>
import TheNavBar from '../components/TheNavBar.vue';
import AppMessage from '../components/UI/AppMessage.vue';

export default {
  components: { TheNavBar, AppMessage }
}
</script>

<style scoped></style>

