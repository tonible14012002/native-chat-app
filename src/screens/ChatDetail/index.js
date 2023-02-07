import { Divider, Layout } from '@ui-kitten/components';
import ScreenLayout from '../../components/ScreenLayout';
import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { getChatDetail } from '../../services/chatServices';
import ChatDetailHeader from './components/ChatHeader';
import ChatInput from './components/ChatInput';

const ChatDetail = ({navigation, route, ...props}) => {
    const [chat, setChat] = useState({});
    const { id, name, status, avatar } = route.params;

    const fetchChatDetail = () => {
        const callApi = async () => {
            const data = await getChatDetail();
            setChat(data);
        };
        callApi();
    };

    useEffect(fetchChatDetail, []);

    return (
        <ScreenLayout>
            <ChatDetailHeader
                name={name}
                status={status}
                avatar={avatar}
            />
            <Layout style={styles.chatWrapper}
                level="2"
             />
            <ChatInput />
       </ScreenLayout>
    );
};

const styles = StyleSheet.create({
    chatWrapper: {
        flexGrow: 1,
    },

});

export default ChatDetail;
