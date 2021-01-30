<template>
  <div class="start-span-block">
    <span :class="'main-page_'+textStyleClass"
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
            startOpacityZero: Boolean,
            textStyleClass:{
                validator: function (value) {
                    return ['start-text', 'second-text', 'small-text'].indexOf(value) !==-1
                }
            }
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
    min-height: 80px;
  }
</style>
