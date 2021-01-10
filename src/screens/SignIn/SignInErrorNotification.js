import { Text } from 'grommet'
import { Notification } from '../../components'

const Icon = () => <Text size="xxlarge">🤷🏽‍♂️</Text>

export const SignInErrorNotification = props => (
  <Notification Icon={Icon} color="status-error" {...props} />
)
