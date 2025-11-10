
import Container from '../../Container'
import InnerContainer from '../../InnerContainer'
import SettingsAdminCard from '../SettingsAdminCard'
import NotificationSettings from './NotificationsSettings'

const SettingsBody = () => {
  return (
    <>
    <Container >
        <InnerContainer>
            <SettingsAdminCard />
            <NotificationSettings />
        </InnerContainer>
    </Container>
    </>
  )
}

export default SettingsBody