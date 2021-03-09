<template>
  <div class="people-studio">
    <span class="main-page__content-title-position block-title">studio</span>
    <span class="content-title">{{ data.title }}</span>

    <div class="content-block">
      <p class="content-p">{{ data.description }}</p>

      <div class="content-column-2">
        <div class="img-wrap">
          <scroll-animation :opacity="false">
            <img :src="getUrl(data.image.url)" alt="" />
          </scroll-animation>
        </div>
        <p
          class="process_img-description_margin-top content-p img-width-description"
        >
          {{ data.description_image }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import scrollAnimation from '../ScrollAnimation';

  export default {
    name: 'People_Studio',
    components: { scrollAnimation },
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
  };
</script>

<style lang="scss" scoped>
  .people-studio {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 94px;

    .content-title {
      margin-top: 83px;
      margin-bottom: 35px;
      margin-left: var(--main-big-margin);
    }

    .content-block {
      display: flex;
      width: 100%;

      .content-p {
        width: 420px;
        margin-left: var(--main-big-margin);
        margin-right: var(--main-very-mini-margin);
      }

      .content-column-2 {
        width: calc(100% - 700px);
        display: flex;
        flex-direction: column;

        .img-wrap {
          width: 100%;
          height: 800px;
        }

        .content-p {
          width: unset;
          margin-left: 100px;
        }
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .people-studio {
      margin-bottom: 50px;
      .content-block {
        .content-column-2 {
          width: calc(100% - 670px);

          .img-wrap {
            height: 580px;
          }
          .content-p {
            margin-left: 0;
            max-width: 490px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .people-studio {
      margin-bottom: 20px;
      .content-title {
        margin-bottom: 69px;
      }
      .content-block {
        .content-p {
          width: calc(
            50% - var(--main-big-margin) - var(--main-very-mini-margin) / 2
          );
        }
        .content-column-2 {
          width: calc(50% - var(--main-very-mini-margin) / 2);
          .img-wrap {
            height: 520px;
          }
          .content-p {
            width: calc(100% - var(--main-mini-margin)) !important;
            /*margin-right: var(--main-mini-margin) !important;*/
            margin-right: 0 !important;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .people-studio {
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: 428px) {
    .people-studio {
      .content-title {
        margin-bottom: 72px;
      }
      .content-block {
        flex-direction: column;
        .content-p {
          width: unset;
          margin-bottom: 100px;
        }
        .content-column-2 {
          width: unset;
          .content-p {
            width: unset !important;
            margin-left: var(--main-big-margin);
            margin-right: var(--main-mini-margin);
            margin-bottom: 0;
          }
        }
      }
    }
  }
</style>
