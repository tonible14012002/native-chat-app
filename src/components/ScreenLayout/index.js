import { Layout } from '@ui-kitten/components';
import { StatusBar } from 'react-native';

const ScreenLayout = ({children, style, ...props}) => {
    return (
        <Layout
            style={{
                flex: 1,
                paddingTop: StatusBar.currentHeight,
                ...style,
            }}
            {...props}
        >
            {children}
        </Layout>
    );
};

export default ScreenLayout;
