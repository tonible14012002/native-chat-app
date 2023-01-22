/* eslint-disable */

import { Text, Button, Input, Layout } from "@ui-kitten/components"
import { View, StyleSheet } from "react-native"
import BackButton from "../../components/BackButton"
import ScreenLayout from "../../components/ScreenLayout"

const Login = ({ navigation, ...props }) => {

    const handleBack = () => {
        navigation.navigate("introduction")
    }
    const handleLogin = () => {
        navigation.navigate("app")
    }

    return (
        <ScreenLayout style={styles.container}>
            <BackButton 
                onPress={handleBack}
                style={styles.backButton}
            />
            <View
                style={styles.promptContainer}
            >
                <Text style={styles.mainPrompt}>
                    Let's sign you in
                </Text>
                <Text style={styles.prompt}>
                    Welcome back
                </Text>
                <Text style={styles.prompt}>
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
                        style={styles.input}
                        textStyle={styles.inputText}
                        size="large"
                        placeholder="Username or email"
                    />
                    <Input 
                        style={styles.input}
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
        </ScreenLayout>
    )
}

const styles = StyleSheet.create({
    backButton: {
        padding: 0,
        marginHorizontal: 20,
        alignSelf: "flex-start",
        marginTop: 10,
        transform: [{translateX: -20}]
    },
    mainPrompt: {
        marginHorizontal: 20,
        fontSize: 36,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 8
    },
    prompt: {
        marginHorizontal: 20,
        fontSize: 30,
        fontWeight: "normal"
    },
    contentWrapper: {
        flexGrow: 2,
        alignItems: "center",
        marginTop: 50,
        paddingVertical: 50,
        paddingHorizontal: 20,
        justifyContent: "space-between",
    },
    inputWrapper: {
        width: "100%",
        gap: 15,
    },
    input: {
        borderRadius: 10,
    },
    inputText: {
        height: 45,
        fontSize: 14
    },
    submitWrapper: {
        width: "100%",
        alignItems: "center",
        gap: 20,
        paddingTop: 20
    },
    button: {
        alignSelf: "stretch",
        borderRadius: 10 
    },

})

export default Login