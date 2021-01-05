import { format as FNformat } from 'date-fns'
import { ru } from 'date-fns/locale'

const locales = { ru }

const language =
  navigator.languages !== undefined
    ? navigator.languages[0]
    : navigator.language

const locale = language ? locales[language] : undefined

export const format = (date, formatStr, options) =>
  FNformat(date, formatStr, {
    locale,
    ...options,
  })
