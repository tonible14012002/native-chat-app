import { TopNavigationAction } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import Icons from '../../../../../../components/Icons/Icons';

const BackAction = () => {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate('chat');
    };
    return (
        <TopNavigationAction
            icon={Icons.Back}
            onPress={handlePress}
        />
    );
};

export default BackAction;
