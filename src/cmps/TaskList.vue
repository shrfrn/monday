<template>
    <section class="task-list">
        <header>
            <p>item</p>
            <p>owner</p>
            <p>label</p>
            <p>people</p>
            <p>tags</p>
        </header>
        <TaskPreview v-for="task in tasks" :task="task" />
        <footer>
            <input placeholder="+ Add Item">
        </footer>
    </section>
</template>

<script>
import TaskPreview from '@/cmps/TaskPreview.vue'

export default {
    props: {
        tasks: {
            type: Array,
            required: true,
        }
    },
    components: {
        TaskPreview,
    }
}
</script>

<style lang="scss">

.task-list {
    display: grid;
    grid-template-columns: 200px 200px 100px 200px 400px;
    overflow-x: scroll;

    header, article {
        display: contents;
    }

    footer {
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
}

</style>