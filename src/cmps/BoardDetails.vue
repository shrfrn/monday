<template>
    <section class="board-details">
        <h1>{{ board.title }}</h1>
        <GroupList :groups="board.groups"/>
    </section>
</template>

<script>
import GroupList from '@/cmps/GroupList.vue'

export default {
    props: {
        board: {
            type: Object,
            required: true,
        }
    },
    components: {
        GroupList,
    }
}
</script>

<style lang="scss">

</style>