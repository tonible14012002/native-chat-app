import { Button } from '@ui-kitten/components';
import Icons from '../../../../../../components/Icons/Icons';

const CameraTool = (props) => {
    return (
        <Button
            {...props}
            appearance="ghost"
            accessoryLeft={<Icons.Camera/>}
        />
    );
};

export default CameraTool;
