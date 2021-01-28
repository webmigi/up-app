<template>
  <div class="image-scale-block_wrap" ref="imageScaleElement">
    <intersect @enter.once="(scaleStartScroll = APP_SCROLL_VALUE),(scaleStartScrollActive = true)">
      <img :src="img"
           :style="'transform: scale('+this.imgScale+')'">
    </intersect>
  </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Image_Scale_Block",
        props: ['img'],
        data() {
            return {
                scaleStartScroll: 0,
                scaleStartScrollActive: false
            }
        },
        computed: {
            ...mapGetters("app", ["APP_SCROLL_VALUE", "APP_WINDOW_SIZE"]),

            imgScale() {
                let startScroll = this.scaleStartScroll;
                return (this.APP_SCROLL_VALUE > startScroll && this.scaleStartScrollActive) ?
                    (this.APP_SCROLL_VALUE > (startScroll + this.APP_WINDOW_SIZE.height + this.$refs.imageScaleElement.offsetHeight) ?
                        1.2

                        :
                        1 + (0.2 / 100) * ((this.APP_SCROLL_VALUE - startScroll) / ((this.APP_WINDOW_SIZE.height + this.$refs.imageScaleElement.offsetHeight) / 100)))
                    :
                    1

            },
        }
    }
</script>

<style lang="scss" scoped>
  .image-scale-block_wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
