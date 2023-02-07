
const { Icon } = require('@ui-kitten/components');

const BackIcon = (props) => {
    return (
        <Icon {...props} name="corner-up-left-outline" />
    );
};

const SearchIcon = (props) => {
    return (
        <Icon {...props} name="search-outline" />
    );
};

const PenIcon = (props) => {
    return (
        <Icon {...props} name="edit-outline" />
    );
};

const UserIcon = (props) => {
    return (
        <Icon {...props} name="person-outline" />
    );
};

const ChatIcon = (props) => {
    return (
        <Icon {...props} name="message-circle-outline"/>
    );
};

const MenuIcon = (props) => {
    return (
        <Icon {...props} name="more-vertical-outline"/>
    );
};

const CheckIcon = (props) => {
    return (
        <Icon {...props} name="checkmark-outline"/>
    );
};

const PlusIcon = (props) => {
    return (
        <Icon {...props} name="plus-outline" />
    );
};

const PaperPlaneIcon = (props) => {
    return (
        <Icon {...props} name="paper-plane-outline"/>
    );
};

const MicIcon = (props) => <Icon {...props} name="mic-outline"/>;
const MinusIcon = (props) => <Icon {...props} name="minus-outline" />;
const ImageIcon = (props) => <Icon {...props} name="image-outline" />;
const ChevronLeftIcon = (props) => <Icon {...props} name="chevron-left-outline" />;
const SmilingFaceIcon = (props) => <Icon {...props} name="smiling-face-outline" />;
const CameraIcon = (props) => <Icon {...props} name="camera-outline" />;
const CloseCircleIcon = (props) => <Icon {...props} name="close-circle-outline" />;

const Icons = {
    Back: BackIcon,
    Search: SearchIcon,
    Pen: PenIcon,
    User: UserIcon,
    Chat: ChatIcon,
    Menu: MenuIcon,
    Check: CheckIcon,
    Plus: PlusIcon,
    PaperPlane: PaperPlaneIcon,
    Mic: MicIcon,
    Minus: MinusIcon,
    Image: ImageIcon,
    ChevronLeft: ChevronLeftIcon,
    SmilingFace: SmilingFaceIcon,
    Camera: CameraIcon,
    CloseCircle: CloseCircleIcon,

};

export default Icons;
export { BackIcon, SearchIcon, PenIcon, UserIcon };
