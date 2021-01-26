<template>
  <div class="main-page_title-imgs__container">
    <div class="block-wrap">
      <div class="block block-fixed">
        <img class="title-imgs_img"
             :style="'transform: scale('+this.imgScale_1+')'"
             :src="TitleImg_1">
      </div>
    </div>

    <div class="block-wrap">
      <div :class="['block', {'block-fixed': (this.APP_SCROLL_VALUE> (this.APP_WINDOW_SIZE.height + 2 * 1000))}]">
        <img class="title-imgs_img"
             :src="TitleImg_2"
             :style="'transform: scale('+this.imgScale_2+')'">
      </div>
    </div>

    <div class="block-wrap">
      <div :class="['block', {'block-fixed': (this.APP_SCROLL_VALUE> (2 * this.APP_WINDOW_SIZE.height + 3 * 1000))}]">
        <img class="title-imgs_img"
             :src="TitleImg_3"
             :style="'transform: scale('+this.imgScale_3+')'">
      </div>
    </div>

    <div class="block-wrap">
      <div :class="['block', {'block-fixed': (this.APP_SCROLL_VALUE> (3 * this.APP_WINDOW_SIZE.height + 4 * 1000))}]">
        <img class="title-imgs_img"
             :src="TitleImg_4"
             :style="'transform: scale('+this.imgScale_4+')'">
      </div>
    </div>

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
                TitleImg_4,
            }
        },
        computed: {
            ...mapGetters("app", ["APP_SCROLL_VALUE", "APP_WINDOW_SIZE"]),

            imgScale_1() {
                let startScroll = 1000;
                return (this.APP_SCROLL_VALUE > startScroll) ?
                    1 + (0.2 / 100) * ((this.APP_SCROLL_VALUE - startScroll) / (this.APP_WINDOW_SIZE.height / 100))
                    :
                    1

            },
            imgScale_2() {
                let startScroll = (this.APP_WINDOW_SIZE.height + 2 * 1000);
                return (this.APP_SCROLL_VALUE > startScroll) ?
                    1 + (0.2 / 100) * ((this.APP_SCROLL_VALUE - startScroll) / (this.APP_WINDOW_SIZE.height / 100))
                    :
                    1

            },
            imgScale_3() {
                let startScroll = (this.APP_WINDOW_SIZE.height * 2 + 3 * 1000);
                return (this.APP_SCROLL_VALUE > startScroll) ?
                    1 + (0.2 / 100) * ((this.APP_SCROLL_VALUE - startScroll) / (this.APP_WINDOW_SIZE.height / 100))
                    :
                    1
            },
            imgScale_4() {
                let startScroll = (this.APP_WINDOW_SIZE.height * 3 + 4 * 1000);
                return (this.APP_SCROLL_VALUE > startScroll) ?
                    1 + (0.2 / 100) * ((this.APP_SCROLL_VALUE - startScroll) / (this.APP_WINDOW_SIZE.height / 100))
                    :
                    1
            },
        }
    }
</script>

<style lang="scss" scoped>
  .main-page_title-imgs__container {
    display: flex;
    flex-direction: column;

    .block-wrap {
      position: relative;
      height: calc(var(--winHeight) + 1000px);

      .block {
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        height: var(--winHeight);
        overflow: hidden;

        .title-imgs_img {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }

      .block-fixed {
        position: fixed;
      }

    }
  }
</style>
