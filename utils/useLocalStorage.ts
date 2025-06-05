import { useState, useEffect } from 'react'

function getStorageValue<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined' || !window.localStorage) {
    // Если сервер или localStorage недоступен — вернуть default
    return defaultValue
  }

  try {
    const saved = localStorage.getItem(key)
    if (saved !== null) {
      return JSON.parse(saved) as T
    }
  } catch (error) {
    console.warn(`Ошибка при чтении localStorage ключа "${key}":`, error)
  }

  return defaultValue
}

export const useLocalStorage = <T,>(
  key: string,
  defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => getStorageValue(key, defaultValue))

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.warn(`Ошибка при записи в localStorage ключа "${key}":`, error)
    }
  }, [key, value])

  return [value, setValue]
}
