import { useEffect } from 'react'
import { Box, Text } from 'grommet'
import { FullHeightBox } from '../layout'
import { firebase } from './firebase'

const NOT_PARTNER_MESSAGE =
  'Профиль партнера не найден. Если вводимые данные верны, свяжитесь с поддержкой.'

export const NoPartnerFallback = () => {
  useEffect(() => {
    alert(NOT_PARTNER_MESSAGE)
    firebase.auth.signOut()
  })
  return (
    <FullHeightBox>
      <Box width={{ max: 'medium' }}>
        <Text textAlign="center">{NOT_PARTNER_MESSAGE}</Text>
      </Box>
    </FullHeightBox>
  )
}
