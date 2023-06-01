<template>
    <section class="group-list">
        <article v-for="group in groups" class="group-preview">
            <GroupPreview :group="group" @update="updateGroup" />
        </article>
    </section>
</template>

<script>
import GroupPreview from '@/cmps/GroupPreview.vue'

export default {
    props: {
        groups: { type: Array, required: true }
    },
    methods: {
        updateGroup(miniGroup) {
            this.$emit('update', miniGroup)
        }
    },
    components: {
        GroupPreview,
    }
}
</script>

<style lang="scss">

</style>