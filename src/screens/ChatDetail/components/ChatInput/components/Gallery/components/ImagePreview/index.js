import { useStyleSheet } from '@ui-kitten/components';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const ImagePreview = ({containerStyle, image}) => {

    const styles = useStyleSheet(themedStyles);
    const [ width, setWidth ] = useState(0);
    const [ height, setHeight ] = useState(0);
    const [ ratio, setRatio ] = useState(1);

    const maxWidth = 300;
    const maxHeight = 600;

    const adjustSize = () => {
        Image.getSize(image.uri, (originWidth, originHeight) => {
            const imageRatio = originHeight / originWidth;
            setRatio(imageRatio);

            const widthScale = originWidth / maxWidth;
            const heightScale = originHeight / maxHeight;
            if (widthScale > heightScale) {
                setWidth(maxWidth);
                setHeight(maxWidth * imageRatio);
            }
            else {
                setHeight(maxHeight);
                setWidth(maxHeight / imageRatio);
            }
        });
    };

    useLayoutEffect(adjustSize, [image]);

    return (
        <View style={styles.imageWrapper}>
            <Image
                source={{uri: image.uri}}
                style={{
                    width: width,
                    height: height,
                    aspectRatio: 1 / ratio,
                    borderRadius: 10,
                }}
            />
        </View>
    );
};

const themedStyles = StyleSheet.create({
    imageWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 600,
        width: 300,
    },
});

export default ImagePreview;
