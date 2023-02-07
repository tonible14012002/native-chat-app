import ScreenLayout from '../../components/ScreenLayout';
import Header from './components/Header';
import ChatList from './components/ChatList';
import { Divider } from '@ui-kitten/components';

const Chat = () => {
    return (
        <ScreenLayout>
            <Header />
            <Divider />
            <ChatList />
        </ScreenLayout>
    );
};


export default Chat;
