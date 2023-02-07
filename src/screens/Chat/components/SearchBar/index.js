import { Layout, Input, useStyleSheet } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Keyboard } from 'react-native';
import Icons from '../../../../components/Icons/Icons';

const SearchBar = () => {
    const navigation = useNavigation();
    const styles = useStyleSheet(themedStyles);
    const handleFocus = () => {
        Keyboard.dismiss();
        navigation.navigate('search');
    };
    return (
        <Layout
            level="1"
            style={styles.wrapper}
        >
            <Input
                size="large"
                placeholder="Search"
                accessoryRight={Icons.Search}
                onFocus={handleFocus}
            />
        </Layout>
    );
};

const themedStyles = StyleSheet.create({
    wrapper: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
});

export default SearchBar;
