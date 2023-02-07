import { View, StyleSheet, Alert } from 'react-native';
import { Avatar, Layout, Text, useStyleSheet } from '@ui-kitten/components';
import globalStyles from '../../../../utils/GlobalStyles';
import EButton from '../../../../components/Ebutton';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';

const Header = () => {
    const styles = useStyleSheet(themedStyles);

    const handleAvatarPress = () => {
        Alert.alert('asdasd');
    };

    return (
        <Layout style={styles.container}>
            <View style={styles.userGroup} >
                <TouchableWithoutFeedback
                    onPress={handleAvatarPress}
                >
                    <Avatar
                        source={require('../../../../assets/avartars/user_avatar.jpg')}
                    />
                    </TouchableWithoutFeedback>
                <Text style={styles.userName} >
                    Chats
                </Text>
            </View>
            <View
                style={styles.toolsContainer}
            >
                <EButton
                    size="tiny"
                    style={styles.toolBtn}
                    status="basic"
                    appearance="ghost"
                    leftIcon={{
                        name: 'camera-outline',
                        width: 20,
                        height: 20,
                    }}
                />
                <EButton
                    size="tiny"
                    status="basic"
                    appearance="ghost"
                    style={styles.toolBtn}
                    leftIcon={{
                        name: 'edit-outline',
                        width: 20,
                        height: 20,
                    }}
                />
            </View>
        </Layout>
    );
};

const themedStyles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    userGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
    },
    userName: {
        fontWeight: 'bold',
        fontSize: globalStyles.fontSize.large,
    },
    toolsContainer: {
        flexDirection: 'row',
        gap: 10,
    },
    toolBtn: {
        // borderWidth: 0,
    },

});

export default Header;
