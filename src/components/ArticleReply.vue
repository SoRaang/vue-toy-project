<template>
    <div class="reply-item">
        <UserNameTag :user-id="props.replyObject.userId" />

        <p>
            {{ props.replyObject.commentText }}
        </p>

        <p>
            {{ new Date(props.replyObject.date).toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' }) }}
        </p>
    </div>
</template> <!-- Template Ends -->

<script setup>
    const props = defineProps([ 'replyObject' ]);
</script> <!-- Logic Ends -->

<style lang="scss" scoped>

</style> <!-- Stylesheet Ends -->