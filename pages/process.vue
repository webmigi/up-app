<template>
  <div class="process">
    <div class="title-img-wrap">
      <div class="titles">
        <span class="people-title main-page_start-text">{{
          process.title
        }}</span>
        <span class="main-page_small-text">{{ process.undertitle }}</span>
      </div>
      <ScrollAnimation cover>
        <img :src="getUrl(process.background_image.url)" alt="" />
      </ScrollAnimation>
      <div class="arrow" @click="scrollTo">
        <img src="/arrow-down.svg" alt="" />
      </div>
    </div>
    <Philosophy :data="process.philosophy" />
    <Method :data="process.desing_method" />
    <Collaboration :data="process.collaboration" />
    <Sustain :data="process.susutain_ability" />
    <News />
  </div>
</template>
<script>
  import News from '../components/shared/News';
  import Philosophy from '../components/Process/Philosophy';
  import Method from '../components/Process/Method';
  import Collaboration from '../components/Process/Collaboration';
  import Sustain from '../components/Process/Sustain';
  import axiosOption from '~/services/axios';

  export default {
    name: 'Process',
    components: {
      News,
      Philosophy,
      Method,
      Collaboration,
      Sustain,
    },
    async asyncData({ error, params }) {
      try {
        const process = await axiosOption.getPage('process');
        return { process: process.data };
      } catch (e) {
        error({
          statusCode: 503,
          message: 'Unable to fetch blogs at this time',
        });
      }
    },
    head() {
      return {
        title: this.process.SEO.seoTitle,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.process.SEO.seoDescription,
          },
          {
            hid: 'fb:app_id',
            property: 'fb:app_id',
            content: 988674798283826,
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: this.process.SEO.seoTitle,
          },
          {
            hid: 'og:url',
            property: 'og:url',
            content: 'http://localhost:3000',
          },
          {
            hid: 'og:type',
            property: 'og:type',
            content: 'website',
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.process.SEO.seoDescription,
          },
          {
            hid: 'og:site_name',
            property: 'og:site_name',
            content: 'up',
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content:
              'https://strapi-up.verodigital.site/' +
              (this.process.SEO.seoImage
                ? this.process.SEO.seoImage.url
                : '/uploads/28_s5_cam001_211541b7b2.jpg'),
          },
          {
            name: 'twitter:title',
            content: this.process.SEO.seoTitle,
          },
          {
            name: 'twitter:card',
            content: 'summary',
          },
          {
            name: 'twitter:description',
            content: this.process.SEO.seoDescription,
          },
          {
            name: 'twitter:site',
            content: 'website',
          },
          {
            name: 'twitter:image',
            content:
              'https://strapi-up.verodigital.site/' +
              (this.process.SEO.seoImage
                ? this.process.SEO.seoImage.url
                : '/uploads/28_s5_cam001_211541b7b2.jpg'),
          },
        ],
      };
    },
    data() {
      return {
        process: {},
      };
    },
    methods: {
      scrollTo() {
        if (process.client) {
          const href = document.getElementsByClassName('philosophy')[0];
          const offsetTop = href.offsetTop + 200;

          scroll({
            top: offsetTop,
            behavior: 'smooth',
          });
        }
      },
      getUrl(url) {
        return `https://strapi-up.verodigital.site${url}`;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .process {
    width: 100%;
    display: flex;
    flex-direction: column;

    .title-img-wrap {
      position: relative;
      width: 100%;
      height: var(--winHeight);
      display: flex;
      align-items: center;
      transition: height 0.3s;
      .titles {
        margin-right: var(--main-mini-margin);
        margin-left: var(--main-mini-margin);
        position: absolute;
        display: flex;
        flex-direction: column;
        z-index: 1;
      }
      .arrow {
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translatex(-50%);
        z-index: 2;
        cursor: pointer;
        img {
          transition: 0.2s transform ease-in-out;
          @media (min-width: 429px) {
            width: 36px;
            height: 20px;
          }
        }
        &:hover img {
          transform: translateY(5px);
        }
      }
      img {
        width: 100%;
        object-fit: cover;
      }

      // .people-title {
      //   position: absolute;
      //   z-index: 1;
      // }
    }
  }
</style>
