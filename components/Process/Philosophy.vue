<template>
  <div class="philosophy">
    <span class="main-page__content-title-position block-title"
      >philosophy</span
    >
    <span class="content-title process_content-title_margin">{{
      data.title
    }}</span>

    <div class="content-block">
      <div class="content-column-1">
        <p class="content-p">
          {{ data.description }}
        </p>
      </div>
      <div class="content-column-2">
        <div class="img-wrap process_img-wrap_height">
          <scroll-animation :opacity="false">
            <img :src="getUrl(data.image.url)" alt="" />
          </scroll-animation>
        </div>
        <p class="content-p process_img-description_margin-top">
          {{ data.description_image }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Philosophy',
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
  };
</script>

<style lang="scss" scoped>
  .philosophy {
    display: flex;
    flex-direction: column;
    margin-bottom: 288px;

    .content-block {
      display: flex;
      width: 100%;

      .content-column-1 {
        display: flex;
        flex-direction: column;
        width: calc(50% + var(--main-very-mini-margin) / 2);

        .content-p {
          margin-left: var(--main-big-margin);
          margin-right: var(--main-very-mini-margin);
          white-space: pre-line;
        }
      }

      .content-column-2 {
        display: flex;
        flex-direction: column;
        width: calc(50% - var(--main-very-mini-margin) / 2);

        .img-wrap {
          width: 100%;
        }
        .content-p {
          margin-right: var(--main-mini-margin);
        }
      }
    }
  }
  @media screen and (max-width: 1280px) {
    .philosophy {
      margin-bottom: 165px;
    }
  }
  @media screen and (max-width: 1024px) {
    .philosophy {
      margin-bottom: 128px;
      .content-title {
        margin-bottom: 69px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .philosophy {
      margin-bottom: 120px;
    }
  }
  @media screen and (max-width: 428px) {
    .philosophy {
      margin-bottom: 119px;
      .content-block {
        flex-direction: column;
        .content-column-1 {
          width: unset;
          margin-bottom: 50px;
        }
        .content-column-2 {
          width: unset;
          .content-p {
            margin-left: var(--main-big-margin);
          }
        }
      }
    }
  }
</style>
