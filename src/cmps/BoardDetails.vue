<template>
    <section class="board-details">
        <h1>{{ board.title }}</h1>
        <GroupList :groups="board.groups" @update="updateGroup" />
    </section>
</template>

<script>
import GroupList from '@/cmps/GroupList.vue'

export default {
    props: {
        board: { type: Object, required: true }
    },
    methods: {
        updateGroup(miniGroup) {
            this.$store.dispatch({ type: 'updateGroup', miniGroup })
        },
    },
    components: {
        GroupList,
    }
}
</script>

<style lang="scss">

</style>