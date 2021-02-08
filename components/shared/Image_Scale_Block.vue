<template>
  <div class="image-scale-block_wrap" ref="imageScaleElement">
    <nuxt-link :to="currentNuxtLink">
      <client-only>
        <intersect @enter.once="(scaleStartScroll = APP_SCROLL_VALUE),(scaleStartScrollActive = true)">
          <div :class="imageScaleImgClasses"
               :style="'transform: scale('+this.imgScale+'); background: url('+img+'); background-size: cover; background-repeat: no-repeat'">
          </div>
        </intersect>
      </client-only>
    </nuxt-link>
  </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Image_Scale_Block",
        props: {
            img: String,
            appointment: {
                validator: function (value) {
                    return ['project', 'news', 'people', 'process', 'spinner']
                }
            }
        },
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

            imageScaleImgClasses() {
                return ['image-scale-img',
                    {
                        'image-scale-img-width-hover': this.appointment === 'project' ||
                            this.appointment === 'news' ||
                            this.appointment === 'people' ||
                            this.appointment === 'process'
                    },
                    {'image-scale-img-width-hover-no-cursor': this.appointment === 'spinner'}]
            },

            currentNuxtLink() {
                if (this.appointment === 'project') {
                    return '/Item_Project'
                } else {
                    return this.$route.path
                }
            }
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

    .image-scale-img-width-hover {
      &:hover {
        transition: transform 0.3s;
        transform: scale(1.4) !important;
        cursor: pointer;
      }
    }
    .image-scale-img-width-hover-no-cursor {
      &:hover {
        cursor: none;
      }
    }
  }
</style>
