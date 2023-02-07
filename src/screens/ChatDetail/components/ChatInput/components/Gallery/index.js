import React, { startTransition } from 'react';
import { ButtonGroup, Layout, Button, useStyleSheet, Modal, } from '@ui-kitten/components';
import { StyleSheet, Platform, View, Alert, PanResponder } from 'react-native';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { useEffect, useState, useRef } from 'react';
import { hasAndroidPermission } from '../../../../../../permissions';
import ImageCard from './components/ImageCard';
import BigList from 'react-native-big-list';
import { Dimensions, Animated } from 'react-native';
import ImagePreview from './components/ImagePreview';
import { screensEnabled } from 'react-native-screens';

const screenSize = Dimensions.get('screen');

const Gallery = ({onSend, ...props}) => {

    const styles = useStyleSheet(themedStyles);
    const BASE_HEIGHT = 0;

    const [ images, setImages ] = useState([]);
    const [ pickedImageIds, setPickedImageIds ] = useState([]);
    const [ toPreview, setToPreview ] = useState({});
    const [ show, setShow ] = useState(false);
    const [ isFullscreen, setIsFullscreen ] = useState(true);

    const galleryHeight = useRef(new Animated.Value(BASE_HEIGHT)).current;
    const viewController = useRef(PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event(
            [
                null,
                { dy: galleryHeight },
            ],
        {useNativeDriver: false},
        ),
        onPanResponderRelease: () => {
            galleryHeight.extractOffset();
        },
    })).current;

    const handleImagePick = (id) => {
        setPickedImageIds([...pickedImageIds, id]);
    };

    const handleImageUnPick = (id) => {
        const index = pickedImageIds.indexOf(id);
        pickedImageIds.splice(index, 1);
        setPickedImageIds([...pickedImageIds]);
    };

    const handleResetPress = () => {
        setPickedImageIds([]);
    };

    const handleSendPress = () => {
        const pickedImages = pickedImageIds.map((imageId, index) => images[imageId]);
        onSend(pickedImages);
        setPickedImageIds([]);
    };

    const handlePreview = (image) => {
        console.log(image);
        setToPreview(image);
        setShow(true);
    };

    const handleCanclePreview = () => {
        setToPreview({});
        setShow(false);
    };

    const loadGalleryAtBegin = () => {
        const getPhotosFromGallery = async () => {
            if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
                Alert.alert('Denied access request !');
                return;
            }
            const result = await CameraRoll.getPhotos({
                first: 10000,
            });
            setImages(result.edges);
        };
        getPhotosFromGallery();
    };

    useEffect(loadGalleryAtBegin, []);

    return (
            <Animated.View
                style={[styles.container, {
                    transform: [{translateY: galleryHeight}],
                }]}
            >
                <Layout
                    style={styles.controller}
                    level={'3'}
                    {...viewController.panHandlers}
                />
                <Modal
                    visible={show}
                    style={styles.previewModal}
                    backgroundColor={'transparent'}
                    backdropStyle={styles.previewBackdrop}
                >
                    <ImagePreview
                        image={toPreview}
                    />
                </Modal>
                <BigList
                    data={images}
                    numColumns={4}
                    renderItem={({item, index}) => (
                            <ImageCard
                                key={index}
                                uri={item.node.image.uri}
                                onPick={() => handleImagePick(index)}
                                onUnpick={() => handleImageUnPick(index)}
                                pickNumber={pickedImageIds.indexOf(index)}
                                onPreview={() => handlePreview(item.node.image)}
                                onCanclePreview={handleCanclePreview}
                            />
                        )
                    }
                    itemHeight={(Dimensions.get('window').width - 4) / 4}
                    style={styles.scrollWrapper}
                    showsVerticalScrollIndicator={false}
                />
                {!!pickedImageIds.length &&
                <View style={styles.optionsContainer}>
                    <ButtonGroup
                        flexDirection="row"
                        status={'control'}
                        size={'large'}
                    >
                        <Button
                            style={styles.optionButton}
                            onPress={handleResetPress}
                        >
                            Reset
                        </Button>
                        <Button
                            style={styles.optionButton}
                            onPress={handleSendPress}
                        >
                            Send
                        </Button>
                    </ButtonGroup>
                </View>}
            </Animated.View>
    );
};

const themedStyles = StyleSheet.create({
    controller: {
        height: 20,
    },
    container: {
        // position: 'absolute',
        height: 350
    },
    scrollWrapper: {
        gap: 10,
    },
    wrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 1,
        marginBottom: 50,
    },
    optionsContainer: {
        position: 'absolute',
        bottom: 20,
        left: '50%',
        transform: [{translateX: -100}],
        elevation: 10,
    },
    optionButton: {
        width: 100,
    },
    previewModal: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignContent: 'center',
    },
    previewBackdrop: {
        backgroundColor: 'black',
        opacity: 0.5,
    },
});

export default Gallery;
