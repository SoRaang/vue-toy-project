<template>
    <aside id="sideBarMain">
        <div style="display: flex; gap: .4rem;">
            <div class="rounded" style="flex: 1;"></div>

            <button class="rounded" @click="router.go(-1)">
                <svg class="remix">
                    <use xlink:href="/miscs/remixicon.symbol.svg#ri-arrow-go-back-line"></use>
                </svg>
            </button>
        </div>

        <div class="rounded">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur saepe blanditiis eum beatae inventore cupiditate ad odio commodi. Quas enim est vero debitis aliquam perferendis tempora, sint porro exercitationem? Nam.
        </div>
    </aside> <!-- #sideBarMain -->
</template> <!-- Template Ends -->

<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();
</script> <!-- Logic Ends -->

<style lang="scss" scoped>

</style> <!-- Stylesheet Ends -->