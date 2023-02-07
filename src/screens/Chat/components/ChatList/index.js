import { Layout, List, Divider, useStyleSheet } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ChatItem from '../ChatItem';
import SearchBar from '../SearchBar';
import { useEffect, useState } from 'react';
import { getChatList } from '../../../../services/chatServices';

const ChatList = () => {

    const [chats, setChats] = useState([]);
    const styles = useStyleSheet(themedStyles);

    const renderItem = (prop) => <ChatItem {...prop} />;

    const fetchChatList = () => {
        const getChat = async () => {
            const data = await getChatList();
            setChats(data);
        };
        getChat();
    };

    useEffect(fetchChatList, []);

    return (
        <Layout
            style={styles.container}
        >
            <List
                style={styles.chatList}
                data={chats}
                renderItem={renderItem}
                ItemSeparatorComponent={Divider}
                ListHeaderComponent={SearchBar}
            />
        </Layout>
    );
};

const themedStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
    },
    chatList: {
        flex:1,
        backgroundColor: 'transparent',
    },
});

export default ChatList;
