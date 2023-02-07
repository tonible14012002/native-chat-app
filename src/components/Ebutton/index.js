import { Button } from '@ui-kitten/components';
import { Icon } from '@ui-kitten/components';

const EButton = ({
    children,
    leftIcon,
    rightIcon,
    ...props
}) => {
    return (
        <Button
            accessoryLeft={leftIcon &&
                <Icon {...leftIcon}/>
            }
            accessoryRight={rightIcon &&
                <Icon {...rightIcon} />
            }
            {...props}
         />
    );
};

export default EButton;
