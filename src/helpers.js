export function formatRub(value, minFraction = 0) {
  // export
  const options = {
    // style: 'currency',
    // currency: 'RUB',
    minimumFractionDigits: minFraction || (value % 1 ? 2 : 0),
    maximumFractionDigits: 2,
  }
  const fix = new Intl.NumberFormat('ru-RU', options)
  return fix.format(value)
}

export function formatNum(value, minFraction = 0, language = 'ru') {
  // export
  const options = {
    // style: 'currency',
    // currency: 'RUB',
    minimumFractionDigits: minFraction || (value % 1 ? 2 : 0),
    maximumFractionDigits: 2,
  }
  const fix = new Intl.NumberFormat(language, options)
  return fix.format(value)
}
