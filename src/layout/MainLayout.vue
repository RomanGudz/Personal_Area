<template>
  <the-nav-bar />
  <the-sidebar />
  <div class="container with-nav">
    <app-message />
    <router-view></router-view>

  </div>
</template>

<script>
import TheNavBar from '../components/TheNavBar.vue';
import AppMessage from '../components/UI/AppMessage.vue';
import TheSidebar from '../components/TheSidebar.vue';

export default {
  components: { TheNavBar, AppMessage, TheSidebar }
}
</script>

<style scoped></style>

