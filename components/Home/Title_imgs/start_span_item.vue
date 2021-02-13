<template>
  <div class="start-span-block">
    <span v-if="!buttonActive"
          :class="'main-page_'+textStyleClass"
          :style="'transform: translateY('+this.spanTranslate+'%); opacity: '+this.spanOpacity+';'">{{text}}</span>
  <div class="btn-wrap"
       v-if="buttonActive"
       :style="'transform: translateY('+this.spanTranslate+'%); opacity: '+this.spanOpacity+';'"
  >
    <Content_btn :title="text" :place="'start-span'"/>
  </div>
  </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import Content_btn from "../../shared/elements/Content_btn";

    export default {
        name: 'start-span-item',
        components: {Content_btn},
        props: {
            text: String,
            startTransformScroll: Number,
            finishTransformScroll: Number,
            startOpacityZero: Boolean,
            textStyleClass: {
                validator: function (value) {
                    return ['start-text', 'start-text', 'small-text'].indexOf(value) !== -1
                }
            },
            buttonActive: Boolean,
        },
        computed: {
            ...mapGetters("app", ["APP_SCROLL_VALUE", "APP_WINDOW_SIZE"]),

            spanTranslate() {
                let startScroll = this.startTransformScroll;
                let finishScroll = this.finishTransformScroll;
                return (this.APP_SCROLL_VALUE > startScroll) ?
                    (this.APP_SCROLL_VALUE > finishScroll ?
                        0

                        :
                        (100 - ((this.APP_SCROLL_VALUE - startScroll) / ((finishScroll - startScroll) / 100))))
                    :
                    100
            },

            spanOpacity() {
                return this.startOpacityZero ?
                    1 - (this.spanTranslate / 100)
                    :
                    0 + (this.spanTranslate / 100)
            },
        }
    }
</script>

<style lang="scss" scoped>
  .start-span-block {
    width: 100%;
    display: flex;
    min-height: 80px;

    .btn-wrap{
      .content-btn{
        &:after {
          background-color: white;
          width: 0;
          transition: width 1s;
        }
        &:hover:after {
          width: 100%;
        }
      }
      .content-btn-text{
        color: white;
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .start-span-block {
      min-height: 52px;
    }
  }

  @media screen and (max-width: 400px) {
    .start-span-block {
      margin-right: var(--main-mini-margin);
    }
  }
</style>
