import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { register } from 'swiper/element/bundle';
import VueDOMPurifyHTML from 'vue-dompurify-html'; // v-html 디렉티브에서 해로운 요소 제거

// Import --- System

import router from './router';
import './assets/stylesheets/style.css';

// Import --- Defaults

import App from './App.vue';

const myProject = createApp(App);
const pinia = createPinia();

register(); // Swiper Element 등록

import ButtonWithIcon from './components/elements/ButtonWithIcon.vue';
import UserNameTag from './components/elements/UserNameTag.vue';

// Import - Global Components (mount 이전에 선언되어야 함)

myProject.component('ButtonWithIcon', ButtonWithIcon);
myProject.component('UserNameTag', UserNameTag);

// 앱 정의

myProject
    .use(router)
    .use(pinia)
    .use(VueDOMPurifyHTML)
    .mount('#app')