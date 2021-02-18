<template>
  <div class="image-scale-block_wrap" ref="imageScaleElement">
      <client-only>
        <intersect
          @enter.once="(scaleStartScroll = APP_SCROLL_VALUE), (scaleStartScrollActive = true)"
          @leave.once="(scaleStartScroll = APP_SCROLL_VALUE), (scaleStartScrollActive = false)"
        >
          <div :class="imageScaleImgClasses" :style="'transform: scale('+this.imgScale+'); opacity: '+this.imgOpacity+'; background-image: url('+img+')'">
          </div>
        </intersect>
      </client-only>
  </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Image_Scale_Block",
        props: {
            img: String,
            opacity: {
              type: [Object, Boolean],
              default: false
            },
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
            imgOpacity() {
              if(this.opacity) {
                let startScroll = this.scaleStartScroll;
                let value = 0;
                let offset = this.opacity.offset ?? 0

                if(this.APP_SCROLL_VALUE > (startScroll + offset) && this.scaleStartScrollActive) {
                  if(this.APP_SCROLL_VALUE > ((startScroll + offset) + this.$refs.imageScaleElement.offsetHeight)) {
                    value = 1;
                  } else {
                    value = (this.APP_SCROLL_VALUE - (startScroll + offset)) / this.$refs.imageScaleElement.offsetHeight
                  }
                } else {
                  value = 0;
                }
                return value;
              } else {
                return 1
              }
            },
            imageScaleImgClasses() {
                return ['image-scale-img',
                    {
                        'image-scale-img-width-hover': this.appointment === 'project' ||
                            this.appointment === 'news' ||
                            this.appointment === 'people' ||
                            this.appointment === 'process'
                    },
                    {'image-scale-img-width-hover-no-cursor': this.appointment === 'news'}]
            },
        }
    }
</script>

<style lang="scss">
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
      background-size: cover;
      background-position: center;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 1s;
        pointer-events: none;
      }
    }

    .image-scale-img-width-hover {
      img:hover {
        transform: scale(1.2);
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
