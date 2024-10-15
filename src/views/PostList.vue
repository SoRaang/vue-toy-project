<template>
    <div id="postList">
        <ul v-if="postData">
            <li class="article-item" v-for="article in postData" :key="article.id">
                <RouterLink class="article-item-wrapper" :to="`/posts/${ article.id }`">
                    <div class="article-item-image-container">
                        <img class="article-item-thumbnail" v-if="article.thumbIndex" :src="article.images.find(item => item.index === article.thumbIndex)?.imageURL" alt="이미지 미리보기">

                        <svg class="remix">
                            <use xlink:href="/miscs/remixicon.symbol.svg#ri-gallery-line"></use>
                        </svg>
                    </div>

                    <dl>
                        <dt>{{ article.title }} [{{ article.comments.length }}]</dt>

                        <dd>{{ postCategory[article.category] }}</dd>
                        <dd>{{ new Date(article.date).toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' }) }}</dd>
                        <dd>{{ article.text }}</dd>
                    </dl>
                </RouterLink>
            </li>
        </ul>

        <div v-else>
            게시물이 없습니다.
        </div>
    </div> <!-- #postList -->
</template> <!-- Template Ends -->

<script setup>
    import postData from '../datas/postData.json'; // 임시 데이터
    import postCategory from '../datas/articleCategory.json'; // 임시 카테고리
</script> <!-- Logic Ends -->

<style lang="scss">

</style> <!-- Stylesheet Ends -->