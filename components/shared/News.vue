<template>
  <client-only>
    <div
      :class="[
        'news-block',
        { 'people__news-block': $route.path === '/people' },
      ]"
    >
      <span class="main-page__content-title-position block-title title">
        news
      </span>
      <div v-if="this.$route.path === '/people'" class="content-title">
        News
      </div>
      <div class="wrap">
        <Gallery />
      </div>
    </div>
  </client-only>
</template>

<script>
  import Gallery from './Gallery/Gallery';

  export default {
    name: 'News',
    components: {
      Gallery,
    },
  };
</script>

<style lang="scss" scoped>
  .cursor-change-enter-active,
  .cursor-change-leave-active {
    transition: 0.2s;
  }
  .cursor-change-enter,
  .cursor-change-leave-to {
    transform: scale(0);
  }
  .news-block {
    background: #e8e8e8;
    padding-bottom: 103px;

    .custom-cursor {
      position: absolute;
      top: 0;
      left: 0;
      width: 200px;
      height: 200px;
      pointer-events: none;
      z-index: 1500;
      opacity: 1;

      svg {
        position: relative;
        left: -50%;
        top: -50%;
        width: 100%;
        height: 100%;
      }
    }

    .title {
      margin-bottom: 102px;
      margin-top: 0px;
      display: block;
    }
  }

  .people__news-block {
    margin-top: 288px;
    background: #ffffff;

    .title {
      margin-bottom: 83px;
    }

    .content-title {
      margin-left: var(--main-big-margin);
      margin-bottom: 32px;
    }
  }

  @media screen and (max-width: 1280px) {
    .news-block {
      padding-bottom: 56px;

      .title {
        margin-bottom: 52px;
        margin-top: 32px;
      }
    }
    .people__news-block {
      margin-top: 158px;
    }
  }

  @media screen and (max-width: 1024px) {
    .news-block {
      padding-bottom: 70px;

      .title {
        margin-bottom: 66px;
        margin-top: 18px;
      }
    }
    .people__news-block {
      margin-top: 90px;
    }
  }

  @media screen and (max-width: 768px) {
    .people__news-block {
      margin-top: 108px;

      .content-title {
        margin-bottom: 44px;
      }
    }
  }

  @media screen and (max-width: 428px) {
    .news-block {
      padding-bottom: 77px;
    }
  }
</style>
