export const userService = {
    getLoggedinUser,
}

function getLoggedinUser() {
    return {
        _id: 'u104',
        fullname: 'Speedy Toto',
        username: 'speedy@balili.com',
        imgUrl: 'http://some-img.jpg',

        mentions: [
            {
                id: 'm104',
                boardId: 'b101',
                taskId: 't101',
            },
        ],
    }
}