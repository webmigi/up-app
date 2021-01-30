<template>
  <div class="start-span-block">
    <span class="main-page_start-text"
          :style="'transform: translateY('+this.spanTranslate+'%); opacity: '+this.spanOpacity+';'">{{text}}</span>
  </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: 'start-span-item',
        props: {
            text: String,
            startTransformScroll: Number,
            finishTransformScroll: Number,
            startOpacityZero: Boolean
        },
        computed: {
            ...mapGetters("app", ["APP_SCROLL_VALUE", "APP_WINDOW_SIZE"]),

            spanTranslate() {
                let startScroll = this.startTransformScroll;
                let finishScroll = this.finishTransformScroll;
                return (this.APP_SCROLL_VALUE > startScroll) ?
                    (this.APP_SCROLL_VALUE > finishScroll ?
                        -100

                        :
                        -((this.APP_SCROLL_VALUE - startScroll) / ((finishScroll - startScroll) / 100)))
                    :
                    0
            },

            spanOpacity() {
                return this.startOpacityZero ?
                    0 - (this.spanTranslate / 100)
                    :
                    1 + (this.spanTranslate / 100)
            },
        }
    }
</script>

<style lang="scss" scoped>
  .start-span-block {
    width: 100%;
    display: flex;
  }
</style>
