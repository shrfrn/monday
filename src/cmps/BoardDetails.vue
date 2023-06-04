<template>
    <section class="board-details">
        <BoardHeader />
        <h1>{{ board.title }}</h1>
        <button @click="addGroup" class="btn-add-group">Add Group</button>
        <GroupList 
            :groups="board.groups" 
            @remove="removeGroup"
            @update="updateGroup" />
    </section>
</template>

<script>
import BoardHeader from '@/cmps/BoardHeader.vue'
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
        BoardHeader,
        GroupList,
    }
}
</script>

<style lang="scss">
.board-details {
    grid-area: main-content;
    overflow: scroll;
}
</style>