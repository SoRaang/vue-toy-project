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
            <p class="article-info-category">{{ categoryExample[thisArticle.category] }}</p>

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

        <div id="articleText">
            {{ thisArticle.text }}
        </div> <!-- #articleText -->

        <div id="postControls">
            <button type="button" class="button-post-controls" title="어쩌고">
                <svg class="remix">
                    <use xlink:href="/miscs/remixicon.symbol.svg#ri-heart-line"></use>
                </svg>

                <span>좋아요</span>
            </button>

            <button type="button" class="button-post-controls" title="어쩌고">
                <svg class="remix">
                    <use xlink:href="/miscs/remixicon.symbol.svg#ri-add-line"></use>
                </svg>

                <span>앨범 추가</span>
            </button>

            <button type="button" class="button-post-controls" title="어쩌고">
                <svg class="remix">
                    <use xlink:href="/miscs/remixicon.symbol.svg#ri-share-2-line"></use>
                </svg>

                <span>공유</span>
            </button>
        </div> <!-- #postControls -->

        <div id="postReplies">
            <div>
                <svg class="remix">
                    <use xlink:href="/miscs/remixicon.symbol.svg#ri-chat-2-line"></use>
                </svg>

                <p>댓글 [{{ thisArticle.comments.length }}]</p>
            </div>

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
    import postData from '../datas/postData.json'; // 임시 데이터

    const router = useRouter();
    const route = useRoute();
    const thisArticle = postData.filter(item => item.id === parseInt(route.params.postID))[0];
    const categoryExample = { // 임시 카테고리 데이터
        1: '일상',
        2: 'TIL',
        3: '정보',
        4: '리뷰'
    }

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

    console.log(thisArticle);
</script> <!-- Logic Ends -->

<style lang="scss">

</style> <!-- Stylesheet Ends -->