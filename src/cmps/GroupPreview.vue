<template>
    <article class="group-preview">
        <h2>{{ group.title }}</h2>
        <TaskList :tasks="group.tasks" />    
    </article>    
</template>

<script>
import TaskList from '@/cmps/TaskList.vue'

export default {
    props: {
        group: {
            type: Object,
            required: true,
        }
    },
    components: {
        TaskList,
    }
}
</script>

<style lang="scss">
.group-preview {
    h2 {
        margin-block-start: 50px;
    }
}
</style>