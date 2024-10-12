<template>
    <article id="postDetail">
        <div id="postImageSlider" v-if="thisArticle.images.length > 0">
            <swiper-container :swiper-params="swiperOptions">
                <swiper-slide class="article-image-slide" v-for="(imgItem, index) in thisArticle.images" :key="index">
                    <img class="article-image" :src="imgItem.imageURL" :alt="imgItem.alt">

                    <div class="article-image-description">
                        {{ imgItem.alt ? imgItem.alt : '설명 없음' }}
                    </div>
                </swiper-slide>
            </swiper-container>

            <div id="postSliderControls">

            </div> <!-- #postSliderControls -->
        </div> <!-- #postImageSlider -->

        <h1 id="postTitle">{{ thisArticle.title }}</h1> <!-- postTitle -->

        <div id="postSummaries">
            <div class="user-name-tag">
                <div class="user-profile-image">
                    <img :src="thisArticle.author.userImage" alt="사용자 프로파일 이미지">
                </div>

                <p class="user-name">
                    <span>{{ thisArticle.author.userName }}</span>
                </p>
            </div>

            <p>{{ thisArticle.date }} | {{ thisArticle.time }}</p>
            <p>좋아요 {{ thisArticle.likes.length }}</p>
        </div> <!-- #postSummaries -->

        <div id="articleText">
            {{ thisArticle.text }}
        </div> <!-- #articleText -->

        <div id="postReplies">
            댓글 [{{ thisArticle.comments.length }}]

            <div v-for="(commentItem, index) in thisArticle.comments" :key="index">
                <p>{{ commentItem.userName }} 님</p>
                <p>{{ commentItem.commentText }}</p>
                <p>{{ commentItem.date }}</p>
            </div>
        </div> <!-- #postReplies -->

        <div id="postNavigation">
            <button @click="router.go(-1)">뒤로</button>
        </div> <!-- #postNavigation -->
    </article> <!-- #postDetail -->
</template> <!-- Template Ends -->

<script setup>
    import { useRouter, useRoute } from 'vue-router';
    import { Navigation, Pagination } from 'swiper/modules';

    import postData from '../datas/postData.json'; // 임시 데이터

    const router = useRouter();
    const route = useRoute();
    const thisArticle = postData.filter(item => item.id === parseInt(route.params.postID))[0];

    const swiperOptions = {
        modules: [ 'navigation', 'pagination' ],
        slidesPerView: 2,
        navigation: {
            enabled: true
        },
        pagination: {
            enabled: true
        }
    }

    console.log(thisArticle);
</script> <!-- Logic Ends -->

<style lang="scss">

</style> <!-- Stylesheet Ends -->