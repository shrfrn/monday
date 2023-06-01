<template>
    <header>
        <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink> |
                <RouterLink to="/board/b101">Board</RouterLink> |
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>
<script>
export default {
    methods: {
        inc() {
            this.$store.commit({ type: 'increment'})
        }
    }
}
</script>