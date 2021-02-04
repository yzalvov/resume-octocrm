import { Box, BoxTypes } from 'grommet'

export const PageContentContainer = (prop: BoxTypes) => {
  return <Box gap="large" margin={{ vertical: 'xlarge' }} {...prop} />
}
