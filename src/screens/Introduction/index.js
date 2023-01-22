import { Layout, Text, Button } from "@ui-kitten/components"
import { StyleSheet, View } from "react-native"
import { Image } from "react-native"

const Introduction = ({navigation, ...props}) => {
    const handleLogin = () => {
        navigation.navigate("login")
    }
    const handleRegister = () => {
        navigation.navigate("register")
    }
    return (
        <Layout style={styles.container} >
            <View style={styles.bannerWrapper}>
                <Image 
                    style={styles.banner}
                    source={require("../../assets/banners/intro_banner.png")}
                />
            </View>
            <View style={styles.contentWrapper}>
                <View>
                    <Text style={styles.title}>
                        Enterprise team collaboration
                    </Text>
                    <Text appearance="hint" style={styles.text}>
                        Bring the whole world inside your pocket, connect to friends, family from everywhere.
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        size="giant" 
                        style={styles.button}
                        onPress={handleRegister}
                    >
                        Register
                    </Button>
                    <Button
                        size="giant"
                        style={styles.button}
                        onPress={handleLogin}
                    >
                        Sign in
                    </Button>
                </View>
            </View>
        </Layout>
    )
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    bannerWrapper: {
        width: "100%",
        alignItems: "center",
        marginTop: 50,
    },
    banner: {
        width: "90%",
        height: 350,
    },
    contentWrapper: {
        flexGrow: 1,
        justifyContent: "space-between"
    },
    title: {
        fontSize: 36,
        textAlign: "center",
    },
    text: {
        marginTop: 20,
        fontSize: 16,
        textAlign: "center",
        paddingHorizontal: 32
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        marginBottom: 40,
        gap: 15,
    },
    button: {
        flex: 1,
        borderRadius: 10,
    }
})

export default Introduction