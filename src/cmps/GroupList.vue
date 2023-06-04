<template>
    <section class="group-list">
        <article v-for="group in groups" :key="group.id" class="group-preview">
            <GroupPreview 
                :group="group" 
                @remove="removeGroup"
                @update="updateGroup" />
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
        },
        removeGroup(groupId) {
            this.$emit('remove', groupId)
        },
    },
    components: {
        GroupPreview,
    }
}
</script>

<style lang="scss">
.group-list{
    padding-inline-start: 42px;
}
</style>