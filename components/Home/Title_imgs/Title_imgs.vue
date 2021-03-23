<template>
  <div class="main-page_title-imgs__container">
    <div
      class="block-wrap"
      :style="
        `opacity: ${APP_SCROLL_VALUE > APP_WINDOW_SIZE.height * 3 ? 0 : 1}`
      "
    >
      <div :class="'block block-fixed'">
        <div
          class="start-span_with-logo_wrap"
          ref="startSpanWithLogoWrap"
          :style="
            'top: calc((' +
              (APP_WINDOW_SIZE.width > 1024 ? 93 : 95) +
              '% / 2) + ' +
              (LOGO_START_HEIGHT / 2 - startSpanWithLogoWrapHeight / 2) +
              'px);'
          "
        >
          <transitionGroup
            tag="div"
            class="translateY-group"
            name="translateY-opacity"
          >
            <start_span_item
              v-if="trGroup === key"
              v-for="(item, key) in data.one.text_iteration"
              :key="key"
              :text="item.text"
              textStyleClass="start-text"
            />
          </transitionGroup>
        </div>
        <img
          class="title-imgs_img"
          :style="'transform: scale(' + this.imgScale_1 + ')'"
          :src="getUrl(data.one.background_image.url)"
          alt=""
        />
      </div>
    </div>

    <div v-show="APP_WINDOW_SIZE.width > 1024" class="block-wrap">
      <div
        :class="[
          'block',
          {
            'block-fixed': this.APP_SCROLL_VALUE > this.APP_WINDOW_SIZE.height,
          },
        ]"
      >
        <div class="start-span_with-logo_wrap start-span_wrap">
          <start_span_item :text="data.two.text_iteration[0].text"
          :startTransformScroll=Number((this.APP_WINDOW_SIZE.height)+1000/5)
          :finishTransformScroll=Number((this.APP_WINDOW_SIZE.height)+1000/5*2)
          :startOpacityZero="true" textStyleClass="start-text" />
          <start_span_item :text="data.two.text_iteration[1].text"
          :startTransformScroll=Number((this.APP_WINDOW_SIZE.height)+1000/5*2)
          :finishTransformScroll=Number((this.APP_WINDOW_SIZE.height)+1000/5*3)
          :startOpacityZero="true" textStyleClass="start-text" />
          <start_span_item :text="data.two.text_iteration[2].text"
          :startTransformScroll=Number((this.APP_WINDOW_SIZE.height)+1000/5*3)
          :finishTransformScroll=Number((this.APP_WINDOW_SIZE.height)+1000/5*4)
          :startOpacityZero="true" textStyleClass="start-text" />
          <nuxt-link :to="data.two.link.link">
            <start_span_item :text="data.two.link.name"
            :startTransformScroll=Number((this.APP_WINDOW_SIZE.height)+1000/5*4)
            :finishTransformScroll=Number((this.APP_WINDOW_SIZE.height)+1000/5*5)
            :startOpacityZero="true" :button-active=true
            textStyleClass="small-text" />
          </nuxt-link>
        </div>
        <img
          class="title-imgs_img"
          :src="getUrl(data.two.background_image.url)"
          :style="'transform: scale(' + this.imgScale_2 + ')'"
        />
      </div>
    </div>

    <div v-show="APP_WINDOW_SIZE.width > 1024" class="block-wrap">
      <div
        :class="[
          'block',
          {
            'block-fixed':
              this.APP_SCROLL_VALUE > 2 * this.APP_WINDOW_SIZE.height + 1000,
          },
        ]"
      >
        <div class="start-span_with-logo_wrap start-span_wrap">
          <start_span_item :text="data.three.text_iteration[0].text"
          :startTransformScroll=Number((this.APP_WINDOW_SIZE.height*2+1000)+(1000/6))
          :finishTransformScroll=Number((this.APP_WINDOW_SIZE.height*2+1000)+(1000/6*2))
          :startOpacityZero="true" textStyleClass="start-text" />
          <start_span_item :text="data.three.text_iteration[1].text"
          :startTransformScroll=Number((this.APP_WINDOW_SIZE.height*2+1000)+(1000/6*2))
          :finishTransformScroll=Number((this.APP_WINDOW_SIZE.height*2+1000)+(1000/6*3))
          :startOpacityZero="true" textStyleClass="start-text" />
          <!--           in 'start_span_item' component props: Number((this.APP_WINDOW_SIZE.height*2+2000)+(1000/6*2)) ;-->
          <!--           (this.APP_WINDOW_SIZE.height*2+2000) - all way to start scroll this images block (get from Artem and figma);-->
          <!--           (1000/6*2) - 1000px - scroll way all string in this images block; 6 - all spans path; *2 - current span path for this span (start or end)-->
          <start_span_item :text="data.three.text_iteration[2].text"
          :startTransformScroll=Number((this.APP_WINDOW_SIZE.height*2+1000)+(1000/6*3))
          :finishTransformScroll=Number((this.APP_WINDOW_SIZE.height*2+1000)+(1000/6*4))
          :startOpacityZero="true" textStyleClass="start-text" />
          <start_span_item :text="data.three.text_iteration[3].text"
          :startTransformScroll=Number((this.APP_WINDOW_SIZE.height*2+1000)+(1000/6*4))
          :finishTransformScroll=Number((this.APP_WINDOW_SIZE.height*2+1000)+(1000/6*5))
          :startOpacityZero="true" textStyleClass="start-text" />
          <!--          <nuxt-link v-if="data.three.link.link" :to="data.three.link.link">-->
          <!--            <start_span_item :text="data.three.link.name"-->
          <!--                             :startTransformScroll=Number((this.APP_WINDOW_SIZE.height*2+2000)+(1000/6*5))-->
          <!--                             :finishTransformScroll=Number((this.APP_WINDOW_SIZE.height*2+2000)+(1000/6*6))-->
          <!--                             :startOpacityZero="true"-->
          <!--                             :button-active=true-->
          <!--                             textStyleClass="small-text"-->
          <!--            />-->
          <!--          </nuxt-link>-->
        </div>
        <img
          class="title-imgs_img"
          :src="getUrl(data.three.background_image.url)"
          :style="'transform: scale(' + this.imgScale_3 + ')'"
          alt=""
        />
      </div>
    </div>

    <div v-show="APP_WINDOW_SIZE.width > 1024" class="block-wrap">
      <div :class="['block']">
        <div class="start-span_with-logo_wrap start-span_wrap">
          <start_span_item :text="data.four.text_iteration[0].text"
          :startTransformScroll=Number((this.APP_WINDOW_SIZE.height*3+2000)+(1000/5))
          :finishTransformScroll=Number((this.APP_WINDOW_SIZE.height*3+2000)+(1000/5*2))
          :startOpacityZero="true" textStyleClass="start-text" />
          <start_span_item :text="data.four.text_iteration[1].text"
          :startTransformScroll=Number((this.APP_WINDOW_SIZE.height*3+2000)+(1000/5*2))
          :finishTransformScroll=Number((this.APP_WINDOW_SIZE.height*3+2000)+(1000/5*3))
          :startOpacityZero="true" textStyleClass="start-text" />
          <start_span_item :text="data.four.text_iteration[2].text"
          :startTransformScroll=Number((this.APP_WINDOW_SIZE.height*3+2000)+(1000/5*3))
          :finishTransformScroll=Number((this.APP_WINDOW_SIZE.height*3+2000)+(1000/5*4))
          :startOpacityZero="true" textStyleClass="start-text" />
          <nuxt-link :to="data.four.link.link">
            <start_span_item :text="data.four.link.name"
            :startTransformScroll=Number((this.APP_WINDOW_SIZE.height*3+2000)+(1000/5*4))
            :finishTransformScroll=Number((this.APP_WINDOW_SIZE.height*3+2000)+(1000/5*5))
            :startOpacityZero="true" :button-active=true
            textStyleClass="small-text" />
          </nuxt-link>
        </div>
        <img
          class="title-imgs_img"
          :src="getUrl(data.four.background_image.url)"
          :style="'transform: scale(' + this.imgScale_4 + ')'"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import start_span_item from './start_span_item';
  export default {
    props: {
      data: {
        type: Object,
        default: {},
      },
    },
    name: 'Title_imgs',
    data() {
      return {
        startSpanWithLogoWrapHeight: 0,
        trGroup: 0,
      };
    },
    components: { start_span_item },
    computed: {
      ...mapGetters('app', [
        'APP_SCROLL_VALUE',
        'APP_WINDOW_SIZE',
        'LOGO_START_HEIGHT',
      ]),

      imgScale_1() {
        let startScroll = 1000;
        return this.APP_SCROLL_VALUE > startScroll
          ? 1 +
              (0.2 / 100) *
                ((this.APP_SCROLL_VALUE - startScroll) /
                  (this.APP_WINDOW_SIZE.height / 100))
          : 1;
      },
      imgScale_2() {
        let startScroll = this.APP_WINDOW_SIZE.height + 2 * 1000;
        return this.APP_SCROLL_VALUE > startScroll
          ? 1 +
              (0.2 / 100) *
                ((this.APP_SCROLL_VALUE - startScroll) /
                  (this.APP_WINDOW_SIZE.height / 100))
          : 1;
      },
      imgScale_3() {
        let startScroll = this.APP_WINDOW_SIZE.height * 2 + 3 * 1000;
        return this.APP_SCROLL_VALUE > startScroll
          ? 1 +
              (0.2 / 100) *
                ((this.APP_SCROLL_VALUE - startScroll) /
                  (this.APP_WINDOW_SIZE.height / 100))
          : 1;
      },
      imgScale_4() {
        let startScroll = this.APP_WINDOW_SIZE.height * 3 + 4 * 1000;
        return this.APP_SCROLL_VALUE > startScroll
          ? 1 +
              (0.2 / 100) *
                ((this.APP_SCROLL_VALUE - startScroll) /
                  (this.APP_WINDOW_SIZE.height / 100))
          : 1;
      },
    },
    mounted() {
      this.setStartSpanWithLogoWrapHeight();
      setInterval(() => {
        let l = this.data.one.text_iteration.length;
        this.trGroup++;
        this.trGroup = this.trGroup === l ? 0 : this.trGroup;
      }, 3000);

      // setTimeout(() => console.log(this.data), 1000)
    },
    methods: {
      getUrl(url) {
        return `https://strapi-up.verodigital.site${url}`;
      },
      setStartSpanWithLogoWrapHeight() {
        let heightBlock = this.$refs.startSpanWithLogoWrap.clientHeight;
        this.startSpanWithLogoWrapHeight = heightBlock;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .main-page_title-imgs__container {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 500;

    .block-wrap:first-child {
      height: var(--winHeight);
    }

    .block-wrap {
      position: relative;
      height: calc(var(--winHeight) + 1000px);
      transition: height 0.3s;

      .block {
        top: 0;
        left: 0;
        width: 100%;
        height: var(--winHeight);
        overflow: hidden;
        display: flex;
        align-items: center;
        //position: fixed;
        position: sticky;
        transition: height 0.3s;

        .title-imgs_img {
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .start-span_with-logo_wrap {
          position: absolute;
          left: 200px;
          display: flex;
          flex-direction: column;
          z-index: 10;
        }

        .start-span_wrap {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }
      }

      .block-fixed {
        position: fixed;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .main-page_title-imgs__container {
      .block-wrap {
        .block {
          .start-span_with-logo_wrap {
            left: 110px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .main-page_title-imgs__container {
      .block-wrap {
        .block {
          .start-span_with-logo_wrap {
            left: 88px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 428px) {
    .main-page_title-imgs__container {
      .block-wrap {
        .block {
          .start-span_with-logo_wrap {
            left: 72px;
          }
        }
      }
    }
  }

  .translateY-opacity-enter-active,
  .translateY-opacity-leave-active {
    transition: all 1s;
  }
  .translateY-opacity-enter, .translateY-opacity-leave-to /* .list-leave-active до версии 2.1.8 */ {
    opacity: 0;
    position: absolute;
  }
  .translateY-opacity-leave-to {
    transform: translateY(-70px);
  }
  .translateY-opacity-enter {
    transform: translateY(70px);
  }
</style>
