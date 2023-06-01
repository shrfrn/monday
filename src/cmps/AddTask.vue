<template>
    <form @submit.prevent="addTask">
        <input placeholder="+ Add Item">
    </form>
</template>

<script>
import { boardService } from '../services/board.service.js'
export default {
    props: {
        group: { type: Object, required: true }
    },
    data() {
        return {
            task: boardService.getEmptyTask(),
        }
    },
    methods: {
        async addTask() {
            try {
                await this.$store.dispatch({ type: 'addTask', group: this.group, task: this.task })
            } catch (err) {
                console.log(err)
                throw new Error('method addTask failed')
            }
            console.log('Task Added');
            this.task = boardService.getEmptyTask()
        }
    }
}
</script>

<style lang="scss">

form {
    height: 36px;
    // background-color: #ddd;
    border: 1px solid lightgrey;
    grid-column: 1 / -1;

    input {
        width: 200px;
        height: 24px;
        margin: 6px 8px;
        border: none;
        border-radius: 5px;
        
        &:hover {
            outline: 1px solid lightgrey;
        }
        &:focus {
            outline: 1px solid rgb(150, 172, 195);
        }
    }
}

</style>