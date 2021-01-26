<template>
  <div class="main-page_title-imgs__container">
    <div class="block_1">
      <img class="title-imgs_img" :src="TitleImg_1">
    </div>

    <img :src="TitleImg_2">
    <img :src="TitleImg_3">
    <img :src="TitleImg_4">
  </div>
</template>

<script>
    import {mapGetters} from "vuex";

    import TitleImg_1 from '@/static/images/Main-page/Title-imgs/title-img-1.jpg'
    import TitleImg_2 from '@/static/images/Main-page/Title-imgs/title-img-2.jpg'
    import TitleImg_3 from '@/static/images/Main-page/Title-imgs/title-img-3.jpg'
    import TitleImg_4 from '@/static/images/Main-page/Title-imgs/title-img-4.jpg'

    export default {
        name: "Title_imgs",
        data() {
            return {
                TitleImg_1,
                TitleImg_2,
                TitleImg_3,
                TitleImg_4
            }
        },
        computed: {
            ...mapGetters("app", ["APP_SCROLL_VALUE"]),

            allBlockHeight() {
                return this.windowHeight * 4
            }
        }
    }
</script>

<style lang="scss" scoped>
  .main-page_title-imgs__container {
    display: flex;
    flex-direction: column;
  }
</style>
