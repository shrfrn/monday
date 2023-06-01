import { createStore } from 'vuex'
import { boardService } from '../services/board.service.js'

const store = createStore({
    strict: true,
    state() {
        return {
            boardList: [],
            board: null,
        }
    },
    mutations: {
        setActiveBoard(state, { board }){
            state.board = board
        }
    },
    actions: {
        async loadBoard({ commit }, { boardId }){
            try {
                const board = await boardService.getById(boardId)
                commit({ type: 'setActiveBoard', board })
            } catch(err) {
                console.log(err);
                throw new Error('action loadBoard failed')
            }
        },
        async updateGroup({ state, commit }, { miniGroup }) {
            try {
                const board = await boardService.updateGroup(state.board._id, miniGroup)
                commit({ type: 'setActiveBoard', board })
            } catch (err) {
                console.log(err);
                throw new Error('action updateGroup failed')
            }
        },
        async addTask({ state, commit }, { group, task }) {
            try {
                const board = await boardService.addTask(state.board._id, group.id, task)
                commit({ type: 'setActiveBoard', board })
            } catch (err) {
                console.log(err);
                throw new Error('action addTask failed')
            }
        },
        async updateTask({ state, commit }, { group, task }) {
            try {
                const board = await boardService.updateTask(state.board._id, group.id, task)
                commit({ type: 'setActiveBoard', board })
            } catch (err) {
                console.log(err);
                throw new Error('action updateTask failed')
            }
        },
        async removeTask({ state, commit }, { group, task }) {
            try {
                const board = await boardService.removeTask(state.board._id, group.id, task.id)
                commit({ type: 'setActiveBoard', board })
            } catch (err) {
                console.log(err);
                throw new Error('action removeTask failed')
            }
        },
    },
    getters: {
        board(state) { return state.board }
    }
})

export default store