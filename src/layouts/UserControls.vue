<template>
    <aside id="userControls">
        <div class="user-info-container" v-if="isLoggedIn === false">
            <ButtonWithIcon element-id="btnLogin" icon-position="back" icon-name="key-fill" >
                로그인
            </ButtonWithIcon>
        </div>

        <div class="user-info-container" v-else>
            <ButtonWithIcon element-id="btnConfig" icon-position="only" icon-name="settings-3-fill">
                사용자 설정
            </ButtonWithIcon>

            <ButtonWithIcon element-id="btnLogout" icon-position="back" icon-name="logout-box-r-line">
                로그아웃
            </ButtonWithIcon>
        </div>
    </aside> <!-- #userColtrols -->
</template> <!-- Template Ends -->

<script setup>
    import { ref } from 'vue';
    import { useUserStore } from '../stores/userInfo';

    const isLoggedIn = ref(true);
    const user = useUserStore();
</script> <!-- Logic Ends -->

<style lang="scss" scoped>

</style> <!-- Stylesheet Ends -->