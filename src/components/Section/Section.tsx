import { Box, Collapsible } from 'grommet'
import { SectionContainer } from './SectionContainer'
import { SectionHeaderWithProgress } from './SectionHeaderWithProgress'
import { SectionContent } from './SectionContent'

interface SectionProps {
  title: string
  isReady?: boolean
  children?: React.ReactNode
}

export const Section = ({ title, children, isReady }: SectionProps) => {
  return (
    <SectionContainer pad={{ horizontal: 'medium' }}>
      <Box pad={{ horizontal: 'small' }}>
        <SectionHeaderWithProgress title={title} isLoading={!isReady} />
        <Collapsible open={isReady}>
          {isReady && (
            <SectionContent
              margin={{ bottom: 'medium' }}
              pad={{ bottom: 'small' }}
            >
              {children}
            </SectionContent>
          )}
        </Collapsible>
      </Box>
    </SectionContainer>
  )
}
