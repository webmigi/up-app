<template>
  <div class="app">
    <div class="main-page">
      <Title_imgs
        :data="{
          one: home.one_screen,
          two: home.two_screen,
          three: home.three_block,
          four: home.four_block,
        }"
      />
      <div class="main-page_content-wrap">
        <div class="main-page_content">
          <Studio
            :data="{
              about: home.title_text_image_link,
            }"
          />
          <Projects />
          <News />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Title_imgs from '../components/Home/Title_imgs_slider/Title_imgs';
  import Studio from '../components/shared/Studio';
  import Projects from '../components/shared/Projects';
  import News from '../components/shared/News';

  import axiosOption from '/services/axios';

  export default {
    name: 'App',
    components: { Title_imgs, Studio, Projects, News },

    async asyncData({ error, params }) {
      try {
        const home = await axiosOption.getPage('home');
        return { home: home.data };
      } catch (e) {
        error({
          statusCode: 503,
          message: 'Unable to fetch blogs at this time',
        });
      }
    },
    head() {
      return {
        title: this.home.SEO.seoTitle,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.home.SEO.seoDescription,
          },
          {
            hid: 'fb:app_id',
            property: 'fb:app_id',
            content: 988674798283826,
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: this.home.SEO.seoTitle,
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
            content: this.home.SEO.seoDescription,
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
              (this.home.SEO.seoImage
                ? this.home.SEO.seoImage.url
                : '/uploads/28_s5_cam001_211541b7b2.jpg'),
          },
          {
            name: 'twitter:title',
            content: this.home.SEO.seoTitle,
          },
          {
            name: 'twitter:card',
            content: 'summary',
          },
          {
            name: 'twitter:description',
            content: this.home.SEO.seoDescription,
          },
          {
            name: 'twitter:site',
            content: 'website',
          },
          {
            name: 'twitter:image',
            content:
              'https://strapi-up.verodigital.site/' +
              (this.home.SEO.seoImage
                ? this.home.SEO.seoImage.url
                : '/uploads/28_s5_cam001_211541b7b2.jpg'),
          },
        ],
      };
    },
    data() {
      return {
        home: {},
      };
    },
  };
</script>

<style lang="scss">
  .app {
    position: relative;
    width: 100%;
    height: 100%;

    .main-page {
      width: 100%;
      display: flex;
      flex-direction: column;

      .main-page_content-wrap {
        width: 100%;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 800;
        overflow: hidden;

        .main-page_content {
          width: 100%;
          display: flex;
          flex-direction: column;
          background-color: #ffffff;
        }
      }
    }
  }
</style>
