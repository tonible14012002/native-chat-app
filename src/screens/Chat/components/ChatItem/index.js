import { useNavigation } from '@react-navigation/native';
import { Avatar, ListItem, Text, useStyleSheet } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import { CheckedIcon } from '../Icons/icons';

const ChatItem = ({item, ...props}) => {
    const { id, name, avatar, isRead, message, status } = item;
    const navigation = useNavigation();
    const styles = useStyleSheet(themedStyles);
    const handlePress = () => {
        navigation.navigate('chatDetail', {
            id,
            name,
            avatar,
            status,
        });
    };
    const renderAvatar = () => {
        return (
            <Avatar
                source={{uri: avatar}}
                shape="rounded"
            />
        );
    };
    const renderDate = () => {
        return (
            <View style={styles.status}>
                {isRead && <CheckedIcon />}
                <Text category="s2" appearance="hint">
                    Mon, 4:27 am
                </Text>
            </View>
        );
    };

    return (
        <ListItem
            {...props}
            style={styles.container}
            accessoryLeft={renderAvatar}
            accessoryRight={renderDate}
            title={name}
            description={message?.formattedMessage || 'Hi There Nam anh...'}
            onPress={handlePress}
        />
    );
};

const themedStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        gap: 10,
    },
    status: {
        flexDirection: 'row',
        gap: 20,
    },
});

export default ChatItem;
