import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import Login from '../screens/Login';
import Chat from '../screens/Chat';
import Profile from '../screens/Profile';
import Introduction from '../screens/Introduction';
import Search from '../screens/Search';
import ChatDetail from '../screens/ChatDetail';
import ChatSetting from '../screens/ChatSetting';

const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
                <AuthStack.Screen
                    name="chatDetail"
                    component={ChatDetail}
                />
                <AuthStack.Screen
                    name="search"
                    component={Search}
                />
                <AuthStack.Screen
                    name="chatSetting"
                    component={ChatSetting}
                />
            </AuthStack.Navigator>
        </NavigationContainer>
    );
};

const MainApp = () => {
    const renderBottomTab = (props) => {
        return (
            <BottomTab {...props} />
        );
    };
    return (
        <Tab.Navigator
            tabBar={renderBottomTab}
            screenOptions={{headerShown: false}}
        >
            <Tab.Screen
                name="chat"
                component={Chat}
            />
            <Tab.Screen
                name="group"
                component={Profile}
            />
            <Tab.Screen
                name="user"
                component={Profile}
            />
        </Tab.Navigator>

    );
};

// const ChatNavigation = () => {
//     <ChatStack.Navigator>
//         <Chat.Screen
//             name="chatDetail"
//             component={ChatDetail}
//         />
//     </ChatStack.Navigator>
// }

const BottomTab = ({ navigation, state }) => {
    const handleSelect = (index) => {
        navigation.navigate(state.routeNames[index]);
    };
    return (
        <BottomNavigation
            selectedIndex={state.index}
            onSelect={handleSelect}
        >
            <BottomNavigationTab
                title="Chat"
            />
            <BottomNavigationTab
                title="Group"
            />
            <BottomNavigationTab
                title="User"
            />
        </BottomNavigation>
    );
};

export default Navigator;
