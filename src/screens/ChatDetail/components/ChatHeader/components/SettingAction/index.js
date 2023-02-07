import { TopNavigationAction } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import Icons from '../../../../../../components/Icons/Icons';

const SettingAction = () => {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate('chatSetting');
    };
    return (
        <TopNavigationAction
            icon={Icons.Menu}
            onPress={handlePress}
        />
    );
};

export default SettingAction;
