import { useStyleSheet } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import { Avatar, Text } from '@ui-kitten/components';

const ChatName = ({avatar, status, name}) => {
    const styles = useStyleSheet(themedStyles);
    return (
        <View style={styles.titleWrapper}>
            {avatar && <Avatar shape="rounded" source={{uri: avatar}} />}
            <View style={styles.titleGroup}>
                <Text category="h6" >{name}</Text>
                <Text status={status === 'online' ? 'primary' : ''} appearance="hint" category="s2">{status}</Text>
            </View>
        </View>
    );
};

const themedStyles = StyleSheet.create({
    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
});

export default ChatName;
