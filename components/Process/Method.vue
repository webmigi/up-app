<template>
  <div class="method">
    <span class="block-title">design method</span>
    <span class="content-title process_content-title_margin">{{
      data.title
    }}</span>

    <div class="content-block-span-1">
      <div class="content-column-1">
        <p class="content-p">{{ data.text_image[0].description }}</p>
      </div>
      <div class="img-wrap process_img-wrap_height">
        <scroll-animation :opacity="false">
          <img :src="getUrl(data.text_image[0].image.url)" alt="" />
        </scroll-animation>
      </div>
    </div>

    <div class="content-block-span-2">
      <div class="content-block-span-2__column-1">
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
        <p class="content-p process_img-description_margin-top">
          {{ data.text_image[1].description }}
        </p>
      </div>
      <div class="content-block-span-2__column-2">
        <p class="content-p">{{ data.text_image[2].description }}</p>
        <div
          :class="[
            'img-wrap-3',
            { 'process_img-wrap_height': APP_WINDOW_SIZE.width <= 1280 },
          ]"
        >
          <scroll-animation :opacity="false">
            <img :src="getUrl(data.text_image[2].image.url)" alt="" />
          </scroll-animation>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'Method',
    props: {
      data: {
        type: Object,
        default: {},
      },
    },
    methods: {
      getUrl(url) {
        return `https://ovz13.dwynn-dev.me2jm.vps.myjino.ru${url}`;
      },
    },
    computed: {
      ...mapGetters('app', ['APP_WINDOW_SIZE']),
    },
  };
</script>

<style lang="scss" scoped>
  .method {
    display: flex;
    flex-direction: column;
    margin-bottom: 251px;
    .scale-wrapper {
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .block-title {
      margin-left: var(--main-big-margin);
    }

    .content-block-span-1 {
      display: flex;
      width: 100%;
      margin-bottom: 100px;

      .content-column-1 {
        display: flex;
        flex-direction: column;
        width: calc(
          275px + var(--main-big-margin) + var(--main-very-mini-margin)
        );

        .content-p {
          display: flex;
          width: 275px;
          margin-left: var(--main-big-margin);
          margin-right: var(--main-very-mini-margin);
        }
      }

      .img-wrap {
        width: calc(
          100% - 275px - var(--main-big-margin) - var(--main-very-mini-margin)
        );
      }
    }

    .content-block-span-2 {
      display: flex;
      width: 100%;

      .content-block-span-2__column-1 {
        width: calc(50% + var(--main-very-mini-margin) / 2);
        display: flex;
        flex-direction: column;

        .img-wrap-2 {
          width: calc(
            100% - var(--main-mini-margin) - var(--main-very-mini-margin)
          );
          margin-left: var(--main-mini-margin);
          margin-right: var(--main-very-mini-margin);
          height: 983px;
        }

        .content-p {
          margin-left: var(--main-big-margin);
          max-width: calc(
            100% - var(--main-big-margin) - (var(--main-very-mini-margin))
          );
        }
      }

      .content-block-span-2__column-2 {
        width: calc(50% - var(--main-very-mini-margin) / 2);
        display: flex;
        flex-direction: column;

        .content-p {
          margin-right: var(--main-mini-margin);
        }

        .img-wrap-3 {
          width: 100%;
          height: 620px;
          margin-top: 123px;
        }
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .method {
      margin-bottom: 158px;
      .content-title {
        margin-bottom: 83px;
      }
      .content-block-span-1 {
        .content-column-1 {
          width: calc(50% + var(--main-very-mini-margin) / 2);
          .content-p {
            margin-left: var(--main-big-margin);
            margin-right: var(--main-very-mini-margin);
            width: unset;
          }
        }
        .img-wrap {
          width: calc(50% - var(--main-very-mini-margin) / 2);
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .method {
      margin-bottom: 108px;
      .content-title {
        margin-bottom: 120px;
      }
      .content-block-span-2 {
        .content-block-span-2__column-2 {
          .img-wrap-3 {
            margin-top: 78px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .method {
      .content-title {
        margin-top: 40px;
        margin-bottom: 18px;
      }
      .content-block-span-1 {
        margin-bottom: 40px;
      }
      .content-block-span-2 {
        .content-block-span-2__column-1 {
          .img-wrap-2 {
            width: calc(100% - var(--main-very-mini-margin));
            margin-left: 0;
          }
        }
      }
    }
  }
  @media screen and (max-width: 428px) {
    .method {
      .content-title {
        margin-top: 83px;
        margin-bottom: 50px;
      }
      .content-block-span-1 {
        flex-direction: column;
        margin-bottom: 50px;
        .content-column-1 {
          width: unset;
          margin-bottom: 50px;
        }
        .img-wrap {
          width: unset;
        }
      }
      .content-block-span-2 {
        flex-direction: column;
        .content-block-span-2__column-2 {
          order: 1;
          width: unset;
          .content-p {
            margin-left: var(--main-big-margin);
          }
          .img-wrap-3 {
            margin-top: 50px;
          }
        }
        .content-block-span-2__column-1 {
          width: unset;
          order: 2;
          .content-p {
            order: 1;
            max-width: unset;
            margin-right: var(--main-mini-margin);
            margin-bottom: 50px;
          }
          .img-wrap-2 {
            order: 2;
            width: unset;
            margin-right: 0;
          }
        }
      }
    }
  }
</style>
