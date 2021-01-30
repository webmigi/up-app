<template>
  <div class="image-scale-block_wrap" ref="imageScaleElement">
    <intersect @enter.once="(scaleStartScroll = APP_SCROLL_VALUE),(scaleStartScrollActive = true)">
      <div class="image-scale-img"
           :style="'transform: scale('+this.imgScale+'); background: url('+img+'); background-size: contain; background-repeat: no-repeat'">
      </div>
    </intersect>
  </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Title_Item_Scale",
        props: ['text'],
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
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .image-scale-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
