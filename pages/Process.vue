<template>
  <div class="process">
    <div class="title-img-wrap">
      <span
        class="people-title main-content-margin-left-right main-page_start-text"
        >{{ process.title }}</span
      >
      <ScrollAnimation>
        <img :src="getUrl(process.background_image.url)" alt="" />
      </ScrollAnimation>
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
    data() {
      return {
        process: {},
      };
    },
    methods: {
      getUrl(url) {
        return `https://ovz13.dwynn-dev.me2jm.vps.myjino.ru${url}`;
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

      .people-title {
        position: absolute;
        z-index: 1;
      }
    }
  }
</style>
