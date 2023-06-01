const board = {
    _id: "b101",
    title: "Robot dev proj",
    isStarred: false,
    createdBy: {
        "_id": "u101",
        "fullname": "Lulu Balili",
        "imgUrl": "http://some-img"
    },
    labels: [
        {
            "id": "l101",
            "title": "Done",
            "color": "#61bd4f"
        },
        {
            "id": "l102",
            "title": "Progress",
            "color": "#61bd33"
        },
        {
            "id": "l103",
            "title": "Stuck",
            "color": "#dd1111"
        },
    ],
    members: [
        {
            "_id": "u101",
            "fullname": "Lulu Balili",
            "imgUrl": "https://www.google.com"
        },
        {
            _id: 'u102',
            fullname: 'Miki Gogo',
            imgUrl: 'http://some-img.jpg',
        },
        {
            _id: 'u103',
            fullname: 'Yoav Yoyo',
            imgUrl: 'http://some-img.jpg',
        },
    ],
    groups: [
        {
            "id": "g101",
            "title": "Group 1",
            "tasks": [
                {
                    "id": "t101",
                    "title": "Do something",
                    "description": "have fun",
                    owner: 
                    {
                        _id: 'u104',
                        fullname: 'Speedy Toto',
                        imgUrl: 'http://some-img.jpg',
                    },
                    "status": "l101", // monday
                    'date': 6568389654,
                    people: [
                        {
                            _id: 'u103',
                            fullname: 'Yoav Yoyo',
                            imgUrl: 'http://some-img.jpg',
                        },
                    ],
                    tags: ['front', 'css', 'new'],
                    "comments": [
                        {
                            "id": "Z6Pnm",
                            "txt": "please copy this",
                            "createdAt": 1590563817436,
                            by: {
                                _id: 'u102',
                                fullname: 'Miki Gogo',
                                imgUrl: 'http://some-img.jpg',
                            },
                        },
                        {
                            "id": "j69hy",
                            "txt": "please call bobo",
                            "createdAt": 1590956457436,
                            by: {
                                _id: 'u103',
                                fullname: 'Yoav Yoyo',
                                imgUrl: 'http://some-img.jpg',
                            },
                        },
                    ],
                    style: {},
                },
                {
                    "id": "t104",
                    "title": "Help me",
                    "description": "help soon",
                    owner: 
                    {
                        _id: 'u101',
                        fullname: 'Lulu Balili',
                        imgUrl: 'http://some-img.jpg',
                    },
                    "status": "l102", // monday
                    'date': 6565689654,
                    people: [
                        {
                            _id: 'u102',
                            fullname: 'Miki Gogo',
                            imgUrl: 'http://some-img.jpg',
                        },
                        {
                            _id: 'u103',
                            fullname: 'Yoav Yoyo',
                            imgUrl: 'http://some-img.jpg',
                        },
                    ],
                    tags: ['front', 'css', 'new'],
                    "comments": [
                        {
                            "id": "Z562m",
                            "txt": "please CR that",
                            "createdAt": 1590996527436,
                            by: {
                                _id: 'u102',
                                fullname: 'Miki Gogo',
                                imgUrl: 'http://some-img.jpg',
                            },
                        },
                        {
                            "id": "ju85y",
                            "txt": "please call him",
                            "createdAt": 1552955557436,
                            by: {
                                _id: 'u103',
                                fullname: 'Yoav Yoyo',
                                imgUrl: 'http://some-img.jpg',
                            },
                        },
                    ],
                    style: {},
                }
            ],
            "style": {
                color: '#674523',
            }
        },
        {
            "id": "g102",
            "title": "Group 2",
            "tasks": [
                {
                    "id": "t103",
                    "title": "Do that",
                    "description": "description",
                    owner: 
                    {
                        _id: 'u104',
                        fullname: 'Speedy Toto',
                        imgUrl: 'http://some-img.jpg',
                    },
                    "status": "l102", // monday
                    'date': 6565689654,
                    people: [
                        {
                            _id: 'u102',
                            fullname: 'Miki Gogo',
                            imgUrl: 'http://some-img.jpg',
                        },
                        {
                            _id: 'u103',
                            fullname: 'Yoav Yoyo',
                            imgUrl: 'http://some-img.jpg',
                        },
                    ],
                    tags: ['front', 'css', 'new'],
                    "comments": [
                        {
                            "id": "ZdPnm",
                            "txt": "please CR this",
                            "createdAt": 1590999817436,
                            by: {
                                _id: 'u102',
                                fullname: 'Miki Gogo',
                                imgUrl: 'http://some-img.jpg',
                            },
                        },
                        {
                            "id": "jurhy",
                            "txt": "please call me",
                            "createdAt": 1590955557436,
                            by: {
                                _id: 'u103',
                                fullname: 'Yoav Yoyo',
                                imgUrl: 'http://some-img.jpg',
                            },
                        },
                    ],
                    style: {},
                },
                {
                    "id": "t104",
                    "title": "Help me",
                    "description": "help soon",
                    owner: 
                    {
                        _id: 'u101',
                        fullname: 'Lulu Balili',
                        imgUrl: 'http://some-img.jpg',
                    },
                    "status": "l103", // monday
                    'date': 6565689654,
                    people: [
                        {
                            _id: 'u102',
                            fullname: 'Miki Gogo',
                            imgUrl: 'http://some-img.jpg',
                        },
                        {
                            _id: 'u103',
                            fullname: 'Yoav Yoyo',
                            imgUrl: 'http://some-img.jpg',
                        },
                    ],
                    tags: ['front', 'css', 'new'],
                    "comments": [
                        {
                            "id": "Z562m",
                            "txt": "please CR that",
                            "createdAt": 1590996527436,
                            by: {
                                _id: 'u102',
                                fullname: 'Miki Gogo',
                                imgUrl: 'http://some-img.jpg',
                            },
                        },
                        {
                            "id": "ju85y",
                            "txt": "please call him",
                            "createdAt": 1552955557436,
                            by: {
                                _id: 'u103',
                                fullname: 'Yoav Yoyo',
                                imgUrl: 'http://some-img.jpg',
                            },
                        },
                    ],
                    style: {},
                }
            ],
            "style": {}
        }
    ],
    activities: [
        {
            "id": "a101",
            "txt": "Changed Color",
            "createdAt": 154514,
            "byMember": {
                "_id": "u101",
                "fullname": "Abi Abambi",
                "imgUrl": "http://some-img"
            },
            "task": {
                "id": "c101",
                "title": "Replace Logo"
            }
        }
    ],
    cmpsOrder: ["status-picker", "member-picker", "date-picker"]
}
