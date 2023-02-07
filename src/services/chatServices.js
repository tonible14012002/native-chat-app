

const getChatList = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                ChatItemData
            );
        }, 1000);
    });
};

const getChatDetail = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                chatDetailData
            );
        }, 1000);
    });
};

export { getChatList, getChatDetail };

const chatDetailData = {
    name: 'Nam Anh',
    avatar: 'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/301733153_3354400938158089_1225829056958232880_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hJgMCJa3f3IAX8RH2_Y&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfBbM47y3cW9HcGEW4-k4ZHJu5IPpInQzYZA-o0EmQrz9w&oe=63D386CD',
    status: 'online',
};

const ChatItemData = [
    {
        id: 1,
        name: 'Nam Anh',
        avatar: 'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/301733153_3354400938158089_1225829056958232880_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hJgMCJa3f3IAX8RH2_Y&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfBbM47y3cW9HcGEW4-k4ZHJu5IPpInQzYZA-o0EmQrz9w&oe=63D386CD',
        status: 'online',
    },
    {
        id: 1,
        name: 'Nam Anh',
        avatar: 'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/301733153_3354400938158089_1225829056958232880_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hJgMCJa3f3IAX8RH2_Y&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfBbM47y3cW9HcGEW4-k4ZHJu5IPpInQzYZA-o0EmQrz9w&oe=63D386CD',
        status: 'online',
    },
    {
        id: 1,
        name: 'Nam Anh',
        avatar: 'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/301733153_3354400938158089_1225829056958232880_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hJgMCJa3f3IAX8RH2_Y&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfBbM47y3cW9HcGEW4-k4ZHJu5IPpInQzYZA-o0EmQrz9w&oe=63D386CD',
        status: '4 min ago',
    },
    {
        id: 1,
        name: 'Nam Anh',
        avatar: 'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/301733153_3354400938158089_1225829056958232880_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hJgMCJa3f3IAX8RH2_Y&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfBbM47y3cW9HcGEW4-k4ZHJu5IPpInQzYZA-o0EmQrz9w&oe=63D386CD',
        status: 'online',
    },
    {
        id: 1,
        name: 'Nam Anh',
        avatar: 'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/301733153_3354400938158089_1225829056958232880_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hJgMCJa3f3IAX8RH2_Y&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfBbM47y3cW9HcGEW4-k4ZHJu5IPpInQzYZA-o0EmQrz9w&oe=63D386CD',
        status: 'online',
    },
    {
        id: 1,
        name: 'Nam Anh',
        avatar: 'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/301733153_3354400938158089_1225829056958232880_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hJgMCJa3f3IAX8RH2_Y&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfBbM47y3cW9HcGEW4-k4ZHJu5IPpInQzYZA-o0EmQrz9w&oe=63D386CD',
        status: '4 min ago',
    },
    {
        id: 1,
        name: 'Nam Anh',
        avatar: 'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/301733153_3354400938158089_1225829056958232880_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hJgMCJa3f3IAX8RH2_Y&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfBbM47y3cW9HcGEW4-k4ZHJu5IPpInQzYZA-o0EmQrz9w&oe=63D386CD',
        status: '4 min ago',
    },
    {
        id: 1,
        name: 'Nam Anh',
        avatar: 'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/301733153_3354400938158089_1225829056958232880_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hJgMCJa3f3IAX8RH2_Y&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfBbM47y3cW9HcGEW4-k4ZHJu5IPpInQzYZA-o0EmQrz9w&oe=63D386CD',
        status: '4 min ago',
    },
];
