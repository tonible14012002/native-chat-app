
import { Button, Icon } from "@ui-kitten/components"

const BackButton = ({style, iconProps, ...props}) => {
    return (
        <Button 
            style={{backgroundColor: "transparent", borderWidth: 0, ...style}}
            {...props}
            accessoryLeft={
                <Icon
                    name="corner-up-left-outline"
                    width={25}
                    height={25}
                    {...iconProps}
                />
            }
        />
    )
}

export default BackButton