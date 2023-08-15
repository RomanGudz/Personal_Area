const ERROR_CODES = {
  EMAIL_NOT_FOUND: 'Пользователь с таким email не существует',
  TOO_MANY_ATTEMPTS_TRY_LATER: 'слишком много попыток входа, попробуйте позже',
  INVALID_PASSWORD: 'Неверный пароль',
  auth: 'Для продолжения работы необходимо авторизоваться'
}

export function error(code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка'
}