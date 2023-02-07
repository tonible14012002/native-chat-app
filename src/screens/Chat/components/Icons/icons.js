const { Icon, useTheme } = require('@ui-kitten/components');

const CheckedIcon = (props) => {
    const theme = useTheme();
    return (
        <Icon
            {...props}
            name="checkmark-circle-outline"
            width={16}
            height={16}
            fill={theme['color-primary-default']}
        />
    );
};

export {CheckedIcon};
