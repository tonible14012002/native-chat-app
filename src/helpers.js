import { Alert } from "react-native"


const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 100
    const isClose = (
        layoutMeasurement.height + contentOffset.y >= 
        contentSize.height - paddingToBottom
    )
    return isClose
}

export { isCloseToBottom }