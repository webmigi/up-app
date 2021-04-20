<template>
  <div class="project">
    <div class="title-img-wrap">
      <span
        class="project-title main-content-margin-left-right main-page_start-text"
        >{{ project.title }}</span
      >
      <Image_Scale_Block :img="getUrl(project.background_image.url)" />
      <div class="arrow" @click="scrollTo">
        <img src="/arrow-down.svg" alt="" />
      </div>
    </div>
    <Projects :projects="{ projects, project }" />
    <News />
  </div>
</template>

<script>
  import Image_Scale_Block from '../../components/shared/Image_Scale_Block';
  import Projects from '../../components/shared/Projects';
  import News from '../../components/shared/News';
  import axiosOption from '~/services/axios';

  export default {
    name: 'Project',
    components: { Image_Scale_Block, Projects, News },
    async asyncData({ error, params }) {
      try {
        // const home = await axiosOption.getPage('home');
        const projects = await axiosOption.getPage('projects-lists');
        const project = await axiosOption.getPage('project');
        return {
          // home: home.data,
          projects: projects.data,
          project: project.data,
        };
      } catch (e) {
        error({
          statusCode: 503,
          message: 'Unable to fetch blogs at this time',
        });
      }
    },
    head() {
      return {
        title: this.project.SEO.seoTitle,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.project.SEO.seoDescription,
          },
          {
            hid: 'fb:app_id',
            property: 'fb:app_id',
            content: 988674798283826,
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: this.project.SEO.seoTitle,
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
            content: this.project.SEO.seoDescription,
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
              (this.project.SEO.seoImage
                ? this.project.SEO.seoImage.url
                : '/uploads/28_s5_cam001_211541b7b2.jpg'),
          },
          {
            name: 'twitter:title',
            content: this.project.SEO.seoTitle,
          },
          {
            name: 'twitter:card',
            content: 'summary',
          },
          {
            name: 'twitter:description',
            content: this.project.SEO.seoDescription,
          },
          {
            name: 'twitter:site',
            content: 'website',
          },
          {
            name: 'twitter:image',
            content:
              'https://strapi-up.verodigital.site/' +
              (this.project.SEO.seoImage
                ? this.project.SEO.seoImage.url
                : '/uploads/28_s5_cam001_211541b7b2.jpg'),
          },
        ],
      };
    },
    data() {
      return {
        // home: {},
        projects: {},
        project: {},
      };
    },
    methods: {
      scrollTo() {
        if (process.client) {
          const href = document.getElementsByClassName('projects-block')[0];
          const offsetTop = href.offsetTop + 100;

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
  .project {
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
      .project-title {
        position: absolute;
        z-index: 1;
      }
    }
  }
</style>
