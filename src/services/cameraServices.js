import ImageCropPicker from 'react-native-image-crop-picker';

const captureImage = async (options) => {
    let result;
    try {
        result = {
            data: await ImageCropPicker.openCamera(options),
            status: 'success',
        };
    }
    catch (e) {
        result = {
            status: 'error',
            data: e,
        };
    }
    return result;
};

const pickImagesFromGallery = async (options) => {
    let result;
    try {
        result = {
            data: await ImageCropPicker.openPicker(options),
            status: 'success',
        };
    }
    catch (e) {
        console.log('catched');
        result =  {
            status: 'error',
        };
    }
    return result;
};

export { captureImage, pickImagesFromGallery };
