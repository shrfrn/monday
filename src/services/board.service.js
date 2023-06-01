import { storageService } from "./async-storage.service.js"
const key = 'board'

export const boardService = {
    query,
    getById,
    save,
    remove,
    getEmptyBoard,
    
    addGroup,
    updateGroup,
    removeGroup,

    addTask,
    updateTask,
    removeTask,
}

async function query() {
    try {
        return storageService.query(key)
    } catch(err){
        console.log(err);
        throw new Error('boardService.query() failed')
    }
}

async function getById(boardId) {
    try {
        return await storageService.get(key, boardId)
    } catch(err){
        console.log(err);
        throw new Error('boardService.getById() failed')
    }
}

async function save(board) {
    try {
        if(board._id){
            return await storageService.put(key, board)
        } else {
            return await storageService.post(key, board)
        }
    } catch(err){
        console.log(err);
        throw new Error('boardService.save() failed')
    }
}

async function remove(boardId) {
    try {
        return await storageService.remove(key, boardId)
    } catch(err){
        console.log(err);
        throw new Error('boardService.remove() failed')
    }
}

function getEmptyBoard() {
    return {
        _id: "b101",
        title: "Robot dev proj",
        isStarred: false,
        createdBy: {},
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
        members: [],
        groups: [
            {
                "id": utilService.makeId(),
                "title": "Group 1",
                "tasks": [
                    {
                        "id": utilService.makeId(),
                        "title": "Item 1",
                        "description": "description 1",
                        owner:{},
                        "status": '',
                        'date': 0,
                        people: [],
                        tags: [],
                        "comments": [],
                        style: {},
                    },
                    {
                        "id": utilService.makeId(),
                        "title": "Help me",
                        "description": "help soon",
                        owner: {},
                        "status": '',
                        people: [],
                        tags: [],
                        "comments": [],
                        style: {},
                    }
                ],
                "style": {}
            }
        ],
        activities: [],
        cmpsOrder: []
    }
}

async function addGroup() {

}

async function updateGroup() {

}

async function removeGroup() {

}

async function addTask() {

}

async function updateTask() {

}

async function removeTask() {

}
