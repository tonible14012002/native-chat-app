import { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';


const useKeyboardVisible = () => {
    const [ isKeyboardVisible, setIsKeyboardVisible ] = useState(false);
    const trackKeybaordVisible = () => {
        const keyboardWillshownListener = Keyboard.addListener(
            'keyboardWillShow',
            () => {
                setIsKeyboardVisible(true);
            }
        );
        const keyboardwillHideListener = Keyboard.addListener(
            'keyboardWillHide',
            () => {
                setIsKeyboardVisible(false);
            }
        );

        return () => {
            keyboardWillshownListener.remove();
            keyboardwillHideListener.remove();

        };
    };
    useEffect(trackKeybaordVisible, []);

    return isKeyboardVisible;
};

export default useKeyboardVisible;
