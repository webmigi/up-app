<template>
  <div class="project">
    <div class="title-img-wrap">
      <span
        class="project-title main-content-margin-left-right main-page_start-text"
        >{{ project.title }}</span
      >
      <Image_Scale_Block :img="getUrl(project.background_image.url)" />
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
        const home = await axiosOption.getPage('home');
        const projects = await axiosOption.getPage('projects-lists');
        const project = await axiosOption.getPage('project');
        return {
          home: home.data,
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
    data() {
      return {
        home: {},
        projects: {},
        project: {},
      };
    },
    methods: {
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

      .project-title {
        position: absolute;
        z-index: 1;
      }
    }
  }
</style>
