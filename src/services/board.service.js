import { utilService } from "./util.service.js"
import { userService } from "./user.service.js"
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
    getEmptyGroup,

    addTask,
    updateTask,
    removeTask,
    getEmptyTask,
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
                    getEmptyTask(),
                    getEmptyTask(),
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

async function updateGroup(boardId, miniGroup) {
    try {
        const board = await getById(boardId)
        const group = board.groups.find(group => group.id === miniGroup.id)
        group.title = miniGroup.title

        return save(board)
    } catch(err){
        console.log(err);
        throw('boardService.addTask() failed...')
    }
}

async function removeGroup() {

}

function getEmptyGroup() {

}

async function addTask(boardId, groupId, task) {
    try {
        const board = await getById(boardId)
        const group = board.groups.find(group => group.id === groupId)
        group.tasks.push(task) // TODO: unshift doesn't work... why?
        return save(board)
    } catch(err){
        console.log(err);
        throw('boardService.addTask() failed...')
    }
}

async function updateTask(boardId, groupId, updatedTask) {
    try {
        const board = await getById(boardId)
        const group = board.groups.find(group => group.id === groupId)
        const idx = group.tasks.findIndex(task => task.id === updatedTask.id)
        
        group.tasks.splice(idx, 1, updatedTask)
        return save(board)
    } catch(err){
        console.log(err);
        throw('boardService.addTask() failed...')
    }
}

async function removeTask(boardId, groupId, taskId) {
    try {
        const board = await getById(boardId)
        const group = board.groups.find(group => group.id === groupId)
        const idx = group.tasks.findIndex(task => task.id === taskId)

        group.tasks.splice(idx, 1)
        return save(board)
    } catch(err){
        console.log(err);
        throw('boardService.addTask() failed...')
    }
}

function getEmptyTask() {
    return                     {
        "id": utilService.makeId(),
        "title": "",
        "description": "description 1",
        owner: userService.getLoggedinUser(),
        "status": '',
        'date': 0,
        people: [],
        tags: [],
        "comments": [],
        style: {},
    }
}