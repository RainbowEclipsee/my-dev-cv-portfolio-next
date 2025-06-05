import { useEffect, useRef } from 'react'
import { useLocalStorage } from '@/utils/useLocalStorage'
// import detectDarkMode from '../../utils/detectDarkMode'

import sun from './sun.svg'
import moon from './moon.svg'

import './style.css'

const BtnDarkMode: React.FC = () => {
  // const [darkMode, setDarkMode] = useLocalStorage<'light' | 'dark'>('darkMode', detectDarkMode())

  // Урезал функционал исходя из того, что дизайн светлой темы сильно режет глаза, но (detectDarkMode) оставляю в проекте.
  // TODO: Сделать дизайн светлой темы более приятным для глаз.
  const [darkMode, setDarkMode] = useLocalStorage<'light' | 'dark'>('darkMode', 'dark')

  const btnRef = useRef<HTMLButtonElement>(null)

  //Меняем цвет темы
  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark')
      if (btnRef.current) {
        btnRef.current.classList.add('dark-mode-btn--active')
      }
    } else {
      document.body.classList.remove('dark')
      if (btnRef.current) {
        btnRef.current.classList.remove('dark-mode-btn--active')
      }
    }
  }, [darkMode])

  //Меняем тему на уровне системных настроек
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (event: MediaQueryListEvent) => {
      const newColorScheme = event.matches ? 'dark' : 'light'
      setDarkMode(newColorScheme)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [setDarkMode])

  function setMode() {
    setDarkMode((currentValue) => (currentValue === 'light' ? 'dark' : 'light'))
  }

  return (
    <button ref={btnRef} className="dark-mode-btn" onClick={setMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  )
}

export default BtnDarkMode
