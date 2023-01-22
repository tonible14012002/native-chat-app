/* eslint-disable */
import { Layout, Text, Input } from "@ui-kitten/components"
import { View } from "react-native"
import ScreenLayout from "../../components/ScreenLayout"

const Chat = () => {
    return (
        <ScreenLayout>
            <Text>Home</Text>
            <Text appearance="hint">hint</Text>
            <View style={{backgroundColor: "pink"}}>
                <Text appearance="alternative">asdfasdf</Text>
            </View>
            <Input />
        </ScreenLayout>
    )
}

export default Chat