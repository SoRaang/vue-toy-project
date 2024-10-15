<template>
    <article id="postDetail">
        <div id="postImageSlider" v-if="thisArticle.images.length > 0">
            <swiper-container v-bind="swiperParams">
                <swiper-slide class="article-image-slide" v-for="(imgItem, index) in thisArticle.images" :key="index">
                    <img class="article-image" :src="imgItem.imageURL" :alt="imgItem.alt">
                </swiper-slide>
            </swiper-container>

            <button type="button" class="slider-prev-el" title="이전 이미지">
                <svg class="remix">
                    <use xlink:href="/miscs/remixicon.symbol.svg#ri-arrow-left-s-line"></use>
                </svg>
            </button>

            <button type="button" class="slider-next-el" title="다음 이미지">
                <svg class="remix">
                    <use xlink:href="/miscs/remixicon.symbol.svg#ri-arrow-right-s-line"></use>
                </svg>
            </button>

            <div class="slider-pagination"></div>
        </div> <!-- #postImageSlider -->

        <div id="postImageSlider" class="no-images" v-else></div> <!-- #postImageSlider -->

        <div id="postInformations">
            <p class="article-info-category">{{ postCategory[thisArticle.category] }}</p>

            <h1 id="postTitle">{{ thisArticle.title }}</h1> <!-- postTitle -->

            <div id="postSummaries">
                <UserNameTag :user-id="thisArticle.author.userId" />

                <span>·</span>

                <p class="article-info-date">{{ new Date(thisArticle.date).toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' }) }}</p>

                <span>·</span>

                <p class="article-info-time">{{ thisArticle.time }}</p>

                <span>·</span>

                <p class="article-info-likes">
                    <svg class="remix">
                        <use xlink:href="/miscs/remixicon.symbol.svg#ri-heart-fill"></use>
                    </svg>

                    <span>{{ thisArticle.likes.length }}</span>
                </p>
            </div> <!-- #postSummaries -->
        </div>  <!-- #postInformations -->

        <div id="articleText" v-dompurify-html="thisArticle.text"></div> <!-- #articleText -->

        <div id="articleMedia">
            미디어 링크
        </div> <!-- #articleMedia -->

        <div id="postControls">
            <button type="button" class="button-post-controls" title="좋아요" style="--button-icon-color: var(--clr-alert);">
                <svg class="remix">
                    <use xlink:href="/miscs/remixicon.symbol.svg#ri-heart-line"></use>
                </svg>

                <span>좋아요</span>
            </button>

            <button type="button" class="button-post-controls" title="미디어" style="--button-icon-color: var(--clr-clear);">
                <svg class="remix">
                    <use xlink:href="/miscs/remixicon.symbol.svg#ri-music-2-line"></use>
                </svg>

                <span>미디어</span>
            </button>

            <button type="button" class="button-post-controls" title="공유" style="--button-icon-color: var(--clr-warn);">
                <svg class="remix">
                    <use xlink:href="/miscs/remixicon.symbol.svg#ri-share-2-line"></use>
                </svg>

                <span>공유</span>
            </button>
        </div> <!-- #postControls -->

        <div id="postReplies">
            <div class="post-replies-titlebar">
                <div class="reply-bubble-animation">
                    <svg class="remix">
                        <use xlink:href="/miscs/remixicon.symbol.svg#ri-chat-3-line"></use>
                    </svg>

                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <p>댓글 <span>·</span> <span>총 {{ thisArticle.comments.length }} 개</span></p>
            </div>

            <ArticleReply v-for="(commentItem, index) in thisArticle.comments" :key="index" :reply-object="commentItem" />
        </div> <!-- #postReplies -->
    </article> <!-- #postDetail -->
</template> <!-- Template Ends -->

<script setup>
    import { useRouter, useRoute } from 'vue-router';
    import postData from '../datas/postData.json'; // 임시 데이터
    import postCategory from '../datas/articleCategory.json'; // 임시 카테고리
    import ArticleReply from '../components/ArticleReply.vue';
import UserNameTag from '../components/elements/UserNameTag.vue';

    const router = useRouter();
    const route = useRoute();
    const thisArticle = postData.find(item => item.id === parseInt(route.params.postID));

    const swiperParams = {
        slidesPerView: 1,
        spaceBetween: 24,
        navigation: {
            enabled: true,
            prevEl: '.slider-prev-el',
            nextEl: '.slider-next-el'
        },
        pagination: {
            enabled: true,
            type: 'bullets',
            // dynamicBullets: true, // 이미지가 아주 많을 때, pagination bullet 컨테이너를 슬라이더처럼 작동시킴
            // dynamicMainBullets: 7,
            el: '.slider-pagination'
        }
    }
</script> <!-- Logic Ends -->

<style lang="scss" scoped>

</style> <!-- Stylesheet Ends -->