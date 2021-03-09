<template>
  <div class="main-page_title-imgs__container">
    <div class="block-wrap">
      <div class="block">
        <div class="start-span_with-logo_wrap" ref="startSpanWithLogoWrap">
          <transitionGroup
            tag="div"
            class="translateY-group"
            name="translateY-opacity"
          >
            <start_span_item
              v-for="(item, key) in data.one.text_iteration"
              :key="key"
              :text="item.text"
              textStyleClass="start-text"
            />
          </transitionGroup>
        </div>
        <img
          class="title-imgs_img"
          :src="getUrl(data.one.background_image.url)"
          alt=""
        />
      </div>
    </div>

    <div class="block-wrap">
      <div :class="['block']">
        <div class="start-span_with-logo_wrap start-span_wrap">
          <start_span_item
            :text="data.two.text_iteration[0].text"
            textStyleClass="start-text"
          />
          <start_span_item
            :text="data.two.text_iteration[1].text"
            textStyleClass="start-text"
          />
          <start_span_item
            :text="data.two.text_iteration[2].text"
            textStyleClass="start-text"
          />
          <nuxt-link :to="data.two.link.link">
            <start_span_item
              :text="data.two.link.name"
              textStyleClass="small-text"
            />
          </nuxt-link>
        </div>
        <img
          class="title-imgs_img"
          :src="getUrl(data.two.background_image.url)"
        />
      </div>
    </div>

    <div class="block-wrap">
      <div :class="['block']">
        <div class="start-span_with-logo_wrap start-span_wrap">
          <start_span_item
            :text="data.three.text_iteration[0].text"
            textStyleClass="start-text"
          />
          <start_span_item
            :text="data.three.text_iteration[1].text"
            textStyleClass="start-text"
          />
          <start_span_item
            :text="data.three.text_iteration[2].text"
            textStyleClass="start-text"
          />
          <start_span_item
            :text="data.three.text_iteration[3].text"
            textStyleClass="start-text"
          />
        </div>
        <img
          class="title-imgs_img"
          :src="getUrl(data.three.background_image.url)"
          alt=""
        />
      </div>
    </div>

    <div class="block-wrap">
      <div :class="['block']">
        <div class="start-span_with-logo_wrap start-span_wrap">
          <start_span_item
            :text="data.four.text_iteration[0].text"
            textStyleClass="start-text"
          />
          <start_span_item
            :text="data.four.text_iteration[1].text"
            textStyleClass="start-text"
          />
          <start_span_item
            :text="data.four.text_iteration[2].text"
            textStyleClass="start-text"
          />
          <nuxt-link :to="data.four.link.link">
            <start_span_item
              :text="data.four.link.name"
              textStyleClass="small-text"
            />
          </nuxt-link>
        </div>
        <img
          class="title-imgs_img"
          :src="getUrl(data.four.background_image.url)"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
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
    computed: {},
    mounted() {},
    methods: {
      getUrl(url) {
        return `http://ovz13.dwynn-dev.me2jm.vps.myjino.ru${url}`;
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
      height: var(--winHeight);
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
