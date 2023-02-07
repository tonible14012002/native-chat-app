import { Text, Button, Input, Layout, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { View, StyleSheet } from 'react-native';
import ScreenLayout from '../../components/ScreenLayout';
import globalStyles from '../../utils/GlobalStyles';
import Icons from '../../components/Icons/Icons';
import { useNavigation } from '@react-navigation/native';

const Login = ({ navigation, ...props }) => {

    const handleLogin = () => {
        navigation.navigate('app');
    };

    return (
        <ScreenLayout>
            <TopNavigation
                title="Back"
                accessoryLeft={BackAction}
            />
            <Layout style={styles.container}>
                <View>
                    <Text category="h1">
                        Let's sign you in
                    </Text>
                    <Text category="h2" style={styles.prompt}>
                        Welcome back
                    </Text>
                    <Text category="h2" style={styles.prompt}>
                        You have been missed
                    </Text>
                </View>
                <Layout
                    style={styles.contentWrapper}
                    // level="4"
                >
                    <View
                        style={styles.inputWrapper}
                    >
                        <Input
                            textStyle={styles.inputText}
                            size="large"
                            placeholder="Username or email"
                        />
                        <Input
                            textStyle={styles.inputText}
                            size="large"
                            placeholder="Password"
                        />
                    </View>
                    <View style={styles.submitWrapper}>
                        <Text
                            appearance="hint"
                        >
                            Don't have an account ? Register
                        </Text>
                        <Button
                            style={styles.button}
                            onPress={handleLogin}
                            size="giant"
                        >
                            Sign in
                        </Button>
                    </View>
                </Layout>
            </Layout>
        </ScreenLayout>
    );
};

const BackAction = () => {
    const navigation = useNavigation();
    const handePress = () => {
        navigation.navigate('introduction');
    };
    return (
        <TopNavigationAction icon={Icons.Back}
            onPress={handePress}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: globalStyles.screenPadding.horizontal,
        paddingTop: 30,
        flex: 1,
    },
    prompt: {
        fontWeight: 'normal',
    },
    contentWrapper: {
        flexGrow: 1,
        alignItems: 'center',
        marginTop: 50,
        paddingVertical: 50,
        justifyContent: 'space-between',
    },
    inputWrapper: {
        width: '100%',
        gap: 15,
    },
    inputText: {
        height: 45,
        fontSize: 16,
    },
    submitWrapper: {
        width: '100%',
        alignItems: 'center',
        gap: 20,
        paddingTop: 20,
    },
    button: {
        alignSelf: 'stretch',
    },
});

export default Login;
