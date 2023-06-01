<template>
    <BoardDetails v-if="board" :board="board" />
</template>

<script>
import BoardDetails from '@/cmps/BoardDetails.vue'
export default {
    async created() {
        const boardId = this.$route.params._id
        await this.$store.dispatch({ type: 'loadBoard', boardId })
    },
    computed: {
        board() { return this.$store.getters.board }
    },
    components: {
        BoardDetails,
    }
}
</script>

<style lang="scss">

</style>