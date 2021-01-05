// import React from 'react'
import { Heading } from 'grommet'
import { Spinner } from '../components'
import { useColorSchemeOption, SECONDARY_TEXT_COLOR } from '../theme-custom'
import { ScreenCenterContainer } from './ScreenCenterContainer'

export const ScreenCenterProgress = ({ label }) => {
  const color = useColorSchemeOption(SECONDARY_TEXT_COLOR)
  return (
    <ScreenCenterContainer
      direction="row"
      justify="center"
      gap="small"
      style={{ marginTop: '-9vh' }}
    >
      <Spinner
        color={color}
        size={label ? 'large' : 'xlarge'}
        // margin={{ top: 'xlarge' }}
      />
      {label && (
        <Heading color={color} as="p" level="4" style={{ fontWeight: 700 }}>
          {label}
        </Heading>
      )}
    </ScreenCenterContainer>
  )
}
