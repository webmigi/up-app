<template>
  <div class="process">
    <div class="title-img-wrap">
      <span class="people-title main-content-margin-left-right main-page_start-text">way of working</span>
      <Image_Scale_Block :img="'/images/People/People-title.jpg'"/>
    </div>
    <Philosophy/>
    <Method/>
    <Collaboration/>
    <Sustain/>
    <News/>
  </div>
</template>
<script>
    import Image_Scale_Block from "../components/shared/Image_Scale_Block";
    import News from "../components/shared/News";
    import Philosophy from "../components/Process/Philosophy";
    import Method from "../components/Process/Method";
    import Collaboration from "../components/Process/Collaboration";
    import Sustain from "../components/Process/Sustain";

    export default {
        name: 'Process',
        components: {Image_Scale_Block, News, Philosophy, Method, Collaboration, Sustain}
    }
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
      transition: height .3s;

      .people-title {
        position: absolute;
        z-index: 1;
      }
    }
  }
</style>
