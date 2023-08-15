<template>
  <div class="container">
    <AppMessage />
    <router-view></router-view>

  </div>
</template>

<script>
import AppMessage from '../components/UI/AppMessage.vue';
export default {
  components: { AppMessage }
}
</script>

<style scoped></style>

