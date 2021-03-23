<template>
  <div class="sustain">
    <span class="block-title">sustain ability</span>
    <span class="content-title process_content-title_margin">{{
      data.title
    }}</span>

    <div class="content-block">
      <div class="span-1">
        <div class="content-column-1">
          <p class="content-p">
            {{ data.text_image[0].description }}
          </p>
        </div>
        <div
          :class="[
            'img-wrap',
            { 'process_img-wrap_height': APP_WINDOW_SIZE.width <= 1280 },
          ]"
        >
          <scroll-animation :opacity="false">
            <img :src="getUrl(data.text_image[0].image.url)" alt="" />
          </scroll-animation>
        </div>
      </div>

      <div
        :class="[
          'img-wrap-2',
          { 'process_img-wrap_height': APP_WINDOW_SIZE.width <= 1280 },
        ]"
      >
        <scroll-animation :opacity="false">
          <img :src="getUrl(data.text_image[1].image.url)" alt="" />
        </scroll-animation>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Image_Scale_Block from '../shared/Image_Scale_Block';

  export default {
    name: 'Sustain',
    components: { Image_Scale_Block },
    props: {
      data: {
        type: Object,
        default: {},
      },
    },
    methods: {
      getUrl(url) {
        return `https://strapi-up.verodigital.site${url}`;
      },
    },
    computed: {
      ...mapGetters('app', ['APP_WINDOW_SIZE']),
    },
  };
</script>

<style lang="scss" scoped>
  .sustain {
    display: flex;
    flex-direction: column;
    margin-bottom: 200px;

    .block-title {
      margin-left: var(--main-big-margin);
    }

    .content-block {
      display: flex;
      width: 100%;
      flex-direction: column;

      .span-1 {
        display: flex;
        width: 100%;
        margin-bottom: 100px;

        .content-column-1 {
          width: calc(50% + var(--main-very-mini-margin) / 2);
          display: flex;
          flex-direction: column;

          .content-p {
            box-sizing: content-box;
            width: calc(
              100% - var(--main-big-margin) - var(--main-very-mini-margin)
            );
            margin-left: var(--main-big-margin);
            margin-right: var(--main-very-mini-margin);
            white-space: pre-line;
          }
        }

        .img-wrap {
          width: calc(50% - var(--main-very-mini-margin) / 2);
          height: 620px;
        }
      }

      .img-wrap-2 {
        width: 71%;
        height: 840px;
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .sustain {
      margin-bottom: 250px;
      .content-title {
        margin-bottom: 75px;
      }
      .content-block {
        .span-1 {
          margin-bottom: 67px;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .sustain {
      margin-bottom: 100px;
      .content-title {
        margin-bottom: 112px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .sustain {
      .content-title {
        margin-top: 40px;
        margin-bottom: 18px;
      }
      .content-block {
        .span-1 {
          margin-bottom: 50px;
        }
        .img-wrap-2 {
          width: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 428px) {
    .sustain {
      .content-title {
        margin-top: 83px;
        margin-bottom: 50px;
      }
      .content-block {
        .span-1 {
          flex-direction: column;

          .content-column-1 {
            width: unset;
            margin-bottom: 50px;
          }
          .img-wrap {
            width: unset;
          }
        }
      }
    }
  }
</style>
