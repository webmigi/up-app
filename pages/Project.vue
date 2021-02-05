<template>
  <div class="project">
    <div class="title-img-wrap">
      <span class="project-title main-content-margin-left-right main-page_start-text">what we do</span>
      <Image_Scale_Block :img="'/images/Home/Title-imgs/title-img-1.jpg'"/>
    </div>
    <Projects/>
    <News/>
  </div>
</template>

<script>
    import Image_Scale_Block from "../components/shared/Image_Scale_Block";
    import Projects from "../components/shared/Projects";
    import News from "../components/shared/News";


    export default {
        name: 'Project',
        components: {Image_Scale_Block, Projects},
    }
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

      .project-title {
        position: absolute;
        z-index: 1;
      }
    }
  }
</style>
