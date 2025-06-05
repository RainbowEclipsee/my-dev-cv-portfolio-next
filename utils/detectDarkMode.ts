//Проверка темной темы на уровне системных настроек
const detectDarkMode = (): 'light' | 'dark' => {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : 'light'
}

export default detectDarkMode