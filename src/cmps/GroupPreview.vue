<template>
    <article class="group-preview">
        <form @submit.prevent="updateGroup">
            <input v-model="miniGroup.title" ref="groupTitle"/>
        </form>
        <TaskList :group="group" />    
    </article>    
</template>

<script>
import TaskList from '@/cmps/TaskList.vue'

export default {
    props: {
        group: { type: Object, required: true }
    },
    data() {
        return {
            miniGroup: {
                id: this.group.id,
                title: this.group.title,
            }
        }
    },
    methods: {
        updateGroup() {
            this.$emit('update', this.miniGroup)
            this.$refs.groupTitle.blur()
        },
    },
    components: {
        TaskList,
    }
}
</script>

<style lang="scss">
.group-preview {
    & > form > input {
        font-size: 22px;
        border: none;
        margin-block-start: 50px;
        margin-block-end: 10px;
    }
}
</style>