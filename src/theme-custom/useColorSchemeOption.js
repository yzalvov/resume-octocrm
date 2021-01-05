import { useBrowserColorScheme } from './useBrowserColorScheme'

export function useColorSchemeOption(options = {}) {
  const { currentColorScheme } = useBrowserColorScheme()
  return options[currentColorScheme]
}
