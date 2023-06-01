<template>
    <section class="task-list">
        <header>
            <p>item</p>
            <p>owner</p>
            <p>label</p>
            <p>people</p>
            <p>tags</p>
        </header>
        <TaskPreview v-for="task in group.tasks" :task="task" />
        <AddTask :group="group" />
    </section>
</template>

<script>
import TaskPreview from '@/cmps/TaskPreview.vue'
import AddTask from '@/cmps/AddTask.vue'

export default {
    props: {
        group: {
            type: Object,
            required: true,
        }
    },
    components: {
        TaskPreview,
        AddTask,
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
}

</style>