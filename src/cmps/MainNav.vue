<template>
    <nav class="main-nav">
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/board/b101">Board</RouterLink> |
        <RouterLink to="/about">About</RouterLink>
    </nav>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.main-nav {
    grid-area: main-nav;
    width: 66px;
    height: 100vh;
    background-color: #580f58;
}
</style>