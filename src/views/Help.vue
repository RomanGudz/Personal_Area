<template>
  <app-page back title="Помощь">
    <question-item v-for="question in questions" :key="question.title" :question="question"></question-item>
  </app-page>
</template>
<script>
import QuestionItem from '../components/question/QuestionItem.vue';
import AppPage from '../components/UI/AppPage.vue';
export default {
  setup() {
    const questions = [
      { title: 'Что есть в данной системе?', text: 'Тут есть все, чтобы смотреть какие заявки какие заявки были созданы' },
      { title: 'Как тут работает авторизация?', text: 'Все реализованно через Firebase' }
    ]

    return {
      questions
    }
  },
  components: { AppPage, QuestionItem }
}

</script>