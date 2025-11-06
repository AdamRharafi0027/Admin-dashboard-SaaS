
import ContentSide from '../ContentSide'
import Header from '../Header'
import SettingsBody from './SettingsBody/SettingsBody'

const SettingsComponents = () => {
  return (
    <>
        <ContentSide>
            <Header>Settings</Header>
            <SettingsBody />
        </ContentSide>
    </>
  )
}

export default SettingsComponents