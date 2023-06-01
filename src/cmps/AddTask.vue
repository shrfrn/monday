<template>
    <form class="frm-add-task" @submit.prevent="addTask">
        <input v-model="task.title" placeholder="+ Add Item">
    </form>
</template>

<script>
import { boardService } from '../services/board.service.js'
export default {
    data() {
        return {
            task: boardService.getEmptyTask(),
        }
    },
    methods: {
        async addTask() {
            this.$emit('add', this.task)
            this.task = boardService.getEmptyTask()
        }
    }
}
</script>

<style lang="scss">

.frm-add-task {
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