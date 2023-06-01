<template>
    <form @submit.prevent="updateTask" class="task-preview">
        <input v-model="taskToEdit.title" />
        <p>{{ task.owner.fullname }}</p>
        <p>{{ task.status }}</p>
        <p>{{ task.people[0]?.fullname }}</p>
        <p>{{ task.tags }}</p>
    </form>
</template>

<script>
export default {
    props: {
        task: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            taskToEdit: { ...this.task },
        }
    },
    methods: {
        updateTask() {
            this.$emit('update', this.taskToEdit)
        }
    }
}
</script>

<style lang="scss">
.task-preview{
    position: relative;
    display: contents;
    
    border: 1px solid lightgrey;

    input {
        border: none;
    }
    p, input {
        // width: max-content;
        padding: 5px 5px 6px;
        border-block-start: 1px solid lightgray;
        border-inline-start: 1px solid lightgray;
    }

    &:not(:last-child) > p {
        background-color: #eee;
        &:first-child {
            position: sticky;
            left: 0;

            background-color: #fffa;
        }
    }

    &:last-child > p{
        border-block-end: 1px solid lightgray;
        // border-inline-end: 1px solid lightgray;
    }
}
</style>