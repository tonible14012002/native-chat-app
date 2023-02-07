import { Alert, StyleSheet, View, Dimensions } from 'react-native';
import Icons from '../../../../components/Icons/Icons';
import { Layout, Input, Button } from '@ui-kitten/components';
import { useState } from 'react';
import CameraTool from './components/CameraTool';
import ImageTool from './components/ImageTool';
import Gallery from './components/Gallery';
import { Keyboard } from 'react-native';

const ChatInput = () => {
    const [ showTool, setShowTool ]  = useState(false);
    const [ value, setValue ] = useState('');
    const [ isValid, setIsValid ] = useState(false);
    const [ showGallery, setShowGallery ] = useState(false);

    const handleSend = async () => {
        Alert.alert('sended', value);
        setIsValid(false);
        setShowTool(false);
        setValue('');
    };

    const handleMediaSend = async (photos) => {
        Alert.alert('sending ', String(photos.length));
    };

    const handleToolSwitch = () => {
        setShowTool(!showTool);
    };

    const handleCameraToolPress = async () => {
        Keyboard.dismiss();
    };

    const handleImageToolPress = async () => {
        Keyboard.dismiss();
        setShowGallery(!showGallery);
    };

    const handleInputPress = () => {
        setShowGallery(false);
    };

    const handleInputChange = (message) => {
        setShowTool(false);
        setShowGallery(false);
        setValue(message);
        if (message.trim() === '') {
            setIsValid(false);
        }
        else {
            setIsValid(true);
        }
    };

    return (
        <Layout
            style={styles.container}
        >
            <Layout
                style={styles.inputWrapper}
                level="1"
            >
                <Layout style={styles.toolsContainer}>
                    <Button
                        style={styles.toolSwitch}
                        accessoryLeft={
                            showTool ?
                            <Icons.Minus/>
                            : <Icons.Plus/>
                        }
                        onPress={handleToolSwitch}

                    />
                    <View
                        style={[styles.toolsGroup, showTool && styles.show]}
                    >
                        <CameraTool
                            style={styles.toolBtn}
                            onPress={handleCameraToolPress}
                        />
                        <ImageTool
                            style={styles.toolBtn}
                            onPress={handleImageToolPress}
                        />
                        <Button
                            style={styles.toolBtn}
                            accessoryLeft={<Icons.Mic/>}
                            appearance="ghost"
                        />
                    </View>
                </Layout>
                <Input
                    style={styles.inputTxt}
                    multiline
                    onChangeText={handleInputChange}
                    onPressIn={handleInputPress}
                    value={value}
                />
                <Button
                    accessoryLeft={<Icons.PaperPlane/>}
                    style={styles.sendBtn}
                    appearance="outline"
                    disabled={!isValid}
                    onPress={handleSend}
                />
            </Layout>

            {showGallery &&
            <Gallery
                onSend={handleMediaSend}
            />}
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        elevation: 1,
    },
    inputWrapper: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 3,
    },
    toolsContainer: {
        flexDirection: 'row',
    },
    toolsGroup: {
        display: 'none',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
    },
    show: {
        display: 'flex',
    },
    toolSwitch: {
        borderRadius: 100,
        width: 40,
        height: 40,
    },
    toolBtn: {
        width: 0,
        height: 0,
    },
    inputTxt: {
        flexGrow: 1,
        maxWidth: Dimensions.get('window').width - 150,
        marginLeft: 15,
        marginRight: 15,
    },
    iconBtn: {
        width: 0,
        height: 0,
    },
    sendBtn: {
        width: 40,
        height: 40,
        borderWidth: 0,
    },
    mediaPreviewContainer: {
        position: 'absolute',
        height: 60,
        top: -70,
        right: 20,
        borderRadius: 5,
    },
});

export default ChatInput;
