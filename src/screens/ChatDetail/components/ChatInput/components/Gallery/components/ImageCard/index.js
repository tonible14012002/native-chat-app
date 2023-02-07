import { StyleSheet, View, Image } from 'react-native';
import { Text, useStyleSheet } from '@ui-kitten/components';
import { TouchableHighlight } from 'react-native';

const ImageCard = ({
    pickNumber,
    onPick,
    onUnpick,
    uri,
    number = 1,
    onPreview,
    onCanclePreview,
    ...props}) => {

    const styles = useStyleSheet(themedStyles);
    const isActive = pickNumber !== -1;

    const handlePress  =  () => {
        if (pickNumber === -1) {
            onPick();
        }
        else {
            onUnpick();
        }
    };

    const handleLongPress = () => {
        onPreview();
    };

    const handlePressOut = () => {
        onCanclePreview();
    };

    return (
        <TouchableHighlight
            onPress={handlePress}
            delayLongPress={500}
            onLongPress={handleLongPress}
            onPressOut={handlePressOut}
        >
            <View
                style={styles.container}
            >
                {isActive && <Text style={styles.modal}>{pickNumber}</Text>}
                <Image style={[styles.image, isActive && styles.active]}
                    {...props}
                    source={{uri: uri}}
                />
            </View>
        </TouchableHighlight>
    );
};

const themedStyles = StyleSheet.create({
    container: {
        margin: 0.5,
        backgroundColor: 'color-basic-400',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    active: {
        opacity: 0.6,
    },
    modal: {
        position: 'absolute',
        zIndex: 1,
        width: 40,
        height: 40,
        left: '50%',
        top: '50%',
        transform: [{translateX: -20}, {translateY: -20}],
        textAlign: 'center',
        lineHeight: 40,
        borderRadius: 100,
        backgroundColor: 'black',
        color: 'white',
    },
});

export default ImageCard;
