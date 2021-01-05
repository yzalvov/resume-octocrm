import { useState, useEffect } from 'react'

export function useBrowserColorScheme() {
  const [currentColorScheme, setCurrentColorScheme] = useState()
  useEffect(() => {
    const testForDark = event =>
      setCurrentColorScheme(event.matches ? 'dark' : 'light')
    const browserScheme = window.matchMedia('(prefers-color-scheme: dark)')
    testForDark(browserScheme) // Set initial value.
    browserScheme.addEventListener('change', testForDark)
    return () => browserScheme.removeEventListener('change', testForDark)
  }, [])
  return { currentColorScheme }
}
