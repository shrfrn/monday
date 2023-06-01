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
        }
    },
    getters: {
        board(state){ return state.board }
    }
})

export default store