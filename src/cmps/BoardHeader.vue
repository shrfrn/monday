<template>
    <section class="board-header">
        <h1>Board Header</h1>
    </section>
</template>

<script>
import { boardService } from '../services/board.service.js'

export default {
}
</script>

<style lang="scss">
.board-header {
    position: sticky;
    top: 0;
    
    height: 100px;
    background-color: lightgray;
}
</style>