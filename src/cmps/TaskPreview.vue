<template>
    <article class="task-preview">
        <p>{{ task.title }}</p>
        <p>{{ task.owner.fullname }}</p>
        <p>{{ task.status }}</p>
        <p>{{ task.people[0].fullname }}</p>
        <p>{{ task.tags }}</p>
    </article>
</template>

<script>
export default {
    props: {
        task: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="scss">
.task-preview{
    position: relative;
    border: 1px solid lightgrey;

    p {
        // width: max-content;
        padding: 5px 5px 6px;
        border-block-start: 1px solid lightgray;
        border-inline-start: 1px solid lightgray;
    }

    &:not(:last-child) > p {
        background-color: #eee;
        &:first-child {
            position: sticky;
            left: 0;

            background-color: #fffa;
        }
    }

    &:last-child > p{
        border-block-end: 1px solid lightgray;
        // border-inline-end: 1px solid lightgray;
    }
}
</style>