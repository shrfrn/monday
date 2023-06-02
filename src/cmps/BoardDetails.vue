<template>
    <section class="board-details">
        <h1>{{ board.title }}</h1>
        <button @click="addGroup" class="btn-add-group">Add Group</button>
        <GroupList 
            :groups="board.groups" 
            @remove="removeGroup"
            @update="updateGroup" />
    </section>
</template>

<script>
import GroupList from '@/cmps/GroupList.vue'

export default {
    props: {
        board: { type: Object, required: true }
    },
    methods: {
        addGroup() {
            this.$store.dispatch({ type: 'addGroup' })
        },
        updateGroup(miniGroup) {
            this.$store.dispatch({ type: 'updateGroup', miniGroup })
        },
        removeGroup(groupId) {
            this.$store.dispatch({ type: 'removeGroup', groupId })
        },
    },
    components: {
        GroupList,
    }
}
</script>

<style lang="scss">

</style>