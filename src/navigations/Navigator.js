/* eslint-disable */

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from '@react-navigation/native'
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components"
import Login from "../screens/Login"
import Chat from "../screens/Chat"
import Profile from "../screens/Profile"
import Introduction from "../screens/Introduction"
import Search from "../screens/Search"

const AuthStack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const Navigator = () => {
    // return ()
    return (
        <NavigationContainer>
            <AuthStack.Navigator
                screenOptions={{headerShown: false}}
            >
                <AuthStack.Screen
                    name="introduction"
                    component={Introduction}
                />
                <AuthStack.Screen
                    name="login"
                    component={Login}
                />
                <AuthStack.Screen
                    name="app"
                    component={MainApp}
                />
            </AuthStack.Navigator>
        </NavigationContainer>
    )
}

const MainApp = () => {
    return (
        <Tab.Navigator
            tabBar={props => <BottomTab {...props}/>}
            screenOptions={{headerShown: false}}
        >
            <Tab.Screen
                name="home"
                component={Chat}
            />
            <Tab.Screen
                name="search"
                component={Search}
            />
            <Tab.Screen
                name="User"
                component={Profile}
            />
        </Tab.Navigator>

    )
}

const BottomTab = ({ navigation, state }) => {
    const handleSelect = (index) => {
        navigation.navigate(state.routeNames[index])
    }
    return (
        <BottomNavigation
            selectedIndex={state.index}
            onSelect={handleSelect}
        >
            <BottomNavigationTab
                title="User"
            />
            <BottomNavigationTab
                title="Chat"
            />
            <BottomNavigationTab
                title="Search"
            />
        </BottomNavigation>
    )
}

export default Navigator