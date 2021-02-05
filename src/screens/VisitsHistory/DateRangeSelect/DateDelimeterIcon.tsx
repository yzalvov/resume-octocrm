import { useColorSchemeOption } from '../../../theme-custom'
import { FormNext } from 'grommet-icons'

export const DateDelimeterIcon = () => {
  const formNextIconColor = useColorSchemeOption({
    light: 'black',
    dark: 'white'
  })

  return <FormNext size="22" color={formNextIconColor} opacity={0.33} />
}
