import { TopNavigation } from '@ui-kitten/components';
import BackAction from './components/BackAction';
import SettingAction from './components/SettingAction';
import ChatName from './components/Title';

const ChatDetailHeader = ({name, status, avatar}) => {

    const renderTitle = (evaProps) => (
        <ChatName
            name={name}
            status={status}
            avatar={avatar}
        />
    );

    return (
        <TopNavigation
            accessoryLeft={BackAction}
            accessoryRight={SettingAction}
            title={renderTitle}
        />
    );
};

export default ChatDetailHeader;
