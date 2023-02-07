import { Button } from '@ui-kitten/components';
import Icons from '../../../../../../components/Icons/Icons';

const ImageTool = (props) => {

    return (
        <Button
            {...props}
            appearance="ghost"
            accessoryLeft={<Icons.Image />}
        />
    );
};

export default ImageTool;
