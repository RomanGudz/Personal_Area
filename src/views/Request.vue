<template>
  <app-loader v-if="loading" />
  <app-page back title="Заявка" v-else-if="request">
    <p><strong>ФИО</strong>: {{ request.fio }}</p>
    <p><strong>Телефон</strong>: {{ request.phone }}</p>
    <p><strong>Сумма</strong>: {{ currency(request.amount) }}</p>
    <p><strong>Статус</strong>:
      <app-status :type="request.status" />
    </p>
    <div class="form-control">
      <label for="status">Статус</label>
      <select id="status" v-model="status">
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>
    <button class="btn danger" @click="remove">Удалить заявку</button>
    <button class="btn" @click="update" v-if="hasChanges">Обновить</button>
  </app-page>
  <h3 v-else class="text-center text-white">
    Заявки с ID= {{ id }} нет
  </h3>
</template>

<script>

import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import AppPage from '../components/UI/AppPage.vue';
import AppLoader from '../components/UI/AppLoader.vue';
import AppStatus from '../components/UI/AppStatus.vue';
import { currency } from '../utils/currency'
export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const loading = ref(true)
    const request = ref({})
    const id = ref(route.params.id)
    const status = ref()


    onMounted(async () => {
      loading.value = true
      request.value = await store.dispatch('request/loadById', route.params.id)
      status.value = request.value.status
      loading.value = false
    })

    const hasChanges = computed(() => {
      return request.value.status !== status.value
    })
    const remove = async () => {
      await store.dispatch('request/removeById', route.params.id)
      router.push('/')
    }
    const update = async () => {
      const data = { ...request.value, status: status.value, id: route.params.id }
      await store.dispatch('request/update', data)
      request.value.status = status.value
    }

    return {
      loading,
      request,
      id,
      status,
      currency,
      remove,
      update,
      hasChanges
    }
  },
  components: { AppPage, AppLoader, AppStatus }
}
</script>

<style lang="scss" scoped></style>