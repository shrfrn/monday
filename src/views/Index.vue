<template>
    <div class="main-layout">
        <MainNav />
        <BoardList />
        <BoardDetails v-if="board" :board="board" />
    </div>
</template>

<script>
import MainNav from '@/cmps/MainNav.vue'
import BoardList from '@/cmps/BoardList.vue'
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
        MainNav,
        BoardList,
        BoardDetails,
    }
}
</script>

<style lang="scss">

.main-layout{
    display: grid;
    grid-template-columns: 1fr 4fr 1000px;
    grid-template-areas: "main-nav board-list main-content";
}
</style>