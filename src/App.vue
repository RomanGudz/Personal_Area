<template>
  <component :is="layout + '-layout'" v-if="layout" />
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AuthLayout from './layout/AuthLayout.vue'
import MainLayout from './layout/MainLayout.vue'
export default {
  setup() {
    const route = useRoute()
    console.log(route.meta.layout)
    const layout = computed(() => route.meta.layout)

    return {
      layout
    }
  },
  components: { MainLayout, AuthLayout }
}
</script>

