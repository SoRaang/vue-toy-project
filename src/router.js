import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import PostList from './views/PostList.vue';
import PortfolioList from './views/PortfolioList.vue';
import GuestBook from './views/GuestBook.vue';

const router = createRouter({ // 라우터 정의
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { // 홈 (Root)
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                breadcrumb: [
                    { name: 'Home' }
                ]
            }
        },
        { // 포스트
            path: '/posts',
            children: [
                { // 포스트 목록 (기본 경로)
                    path: '',
                    name: 'Posts',
                    component: PostList,
                    meta: {
                        breadcrumb: [
                            { name: 'Posts' }
                        ]
                    }
                },
                { // 개별 포스트 자세히 보기
                    path: ':postID',
                    component: () => import('./views/PostDetail.vue'),
                    meta: {
                        breadcrumb: [
                            { name: 'Article' }
                        ]
                    }
                },
                { // 포스트 작성
                    path: 'write',
                    component: () => import('./views/PostWrite.vue'),
                    meta: {
                        breadcrumb: [
                            { name: 'Write' }
                        ]
                    }
                }
            ]
        },
        { // 포트폴리오
            path: '/portfolio',
            children: [
                {
                    path: '',
                    name: 'Portfolio',
                    component: PortfolioList,
                    meta: {
                        breadcrumb: [
                            { name: 'Portfolio' }
                        ]
                    }
                },
                {
                    path: ':workID',
                    component: () => import('./views/PortfolioDetail.vue'),
                    meta: {
                        breadcrumb: [
                            { name: 'Work' }
                        ]
                    }
                }
            ]
        },
        { // 방명록
            path: '/guestbook',
            name: 'Guestbook',
            component: GuestBook,
            meta: {
                breadcrumb: [
                    { name: 'Guestbook' }
                ]
            }
        },
        {
            path: '/admin',
            name: 'Admin',
            component: () => import('./views/admin/Dashboard.vue'),
            meta: {
                breadCrumb: [
                    { name: 'Dashboard' }
                ]
            }
        }
    ],
    scrollBehavior(to, from, savedPosition) { // 라우트 이동시 페이지 최상단으로 이동
        return { top: 0 }
    }
});

export default router;