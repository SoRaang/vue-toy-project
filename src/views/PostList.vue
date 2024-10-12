<template>
    <div id="postList">
        <ul v-if="postData">
            <li v-for="article in postData" :key="article.id">
                <RouterLink :to="`/posts/${ article.id }`">{{ article.title }} [{{ article.comments.length }}]</RouterLink>
            </li>
        </ul>

        <div v-else>
            게시물이 없습니다.
        </div>
    </div> <!-- #postList -->
</template> <!-- Template Ends -->

<script setup>
    import postData from '../datas/postData.json'; // 임시 데이터
</script> <!-- Logic Ends -->

<style lang="scss">

</style> <!-- Stylesheet Ends -->