<template>
  <div class="sidebar" v-if="sidebar">
    <span class="sidebar-close" @click="closeSidebar">&times;</span>
    <div class="side-content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus velit alias soluta ducimus voluptatum
        obcaecati.</p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const sidebar = computed(() => store.state.sidebar)

    const closeSidebar = () => {
      store.commit('closeSidebar')
    }

    return {
      sidebar, closeSidebar
    }
  }
}
</script>

<style lang="scss" scoped></style>