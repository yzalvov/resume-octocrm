import {
  Heading,
  // Layer
} from 'grommet'
import { Spinner } from '../components'
import { FullHeightBox } from '../layout'
import { useColorSchemeOption, SECONDARY_TEXT_COLOR } from '../theme-custom'

export const ScreenCenterProgress = ({ label = 'Подключаемся...' }) => {
  const color = useColorSchemeOption(SECONDARY_TEXT_COLOR)

  // return (
  //   <Layer position="center" full animation="fadeIn">
  //     <FullHeightBox>
  //       <Spinner color={color} size={label ? 'large' : 'xlarge'} />
  //       <Heading color={color} as="p" level="4" style={{ fontWeight: 700 }}>
  //         {label}
  //       </Heading>
  //     </FullHeightBox>
  //   </Layer>
  // )
  return (
    <FullHeightBox>
      <Spinner color={color} size={label ? 'large' : 'xlarge'} />
      {label && (
        <Heading color={color} as="p" level="4" style={{ fontWeight: 700 }}>
          {label}
        </Heading>
      )}
    </FullHeightBox>
  )
}
