import { computed, watch } from 'vue'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export function useLoginForm() {
  const store = useStore()
  const router = useRouter()
  const { handleSubmit, isSubmitting, submitCount } = useForm()
  const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
    'email',
    yup
      .string()
      .trim()
      .required('Пожалуйста введите email')
      .email('Необходимо ввести коректный email')
  )

  const { value: password, errorMessage: pError, handleBlur: pBlur } = useField(
    'password',
    yup
      .string()
      .trim('Пожалуйста введите пароль')
      .required('Необходимо ввести коректный пароль')
      .min(6, 'Пароль не можут быть короче 6 символов ')
  )

  const isTooManySubmits = computed(() => {
    return submitCount.value >= 3
  })

  watch(isTooManySubmits, value => {
    if (value) {
      setTimeout(() =>
        submitCount.value = 0
        , 1500)
    }
  })

  const onSubmit = handleSubmit(async values => {
    try {
      await store.dispatch('auth/login', values)
      router.push('/')
    } catch (e) {

    }

  })
  return {
    email,
    password,
    eError,
    eBlur,
    pError,
    pBlur,
    onSubmit,
    isSubmitting,
    isTooManySubmits

  }
}