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
