import { Layout } from "@ui-kitten/components"
import { SafeAreaView } from "react-native"
import { StatusBar } from "react-native"

const ScreenLayout = ({children, style, ...props}) => {
    return (
        <Layout style={{flex: 1, paddingTop: StatusBar.currentHeight}}>
                {children}
        </Layout>
    )
}

export default ScreenLayout 