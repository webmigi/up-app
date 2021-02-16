<template>
  <div class="app">
    <div class="main-page">
      <Title_imgs/>
      <div class="main-page_content-wrap">
        <div class="main-page_content">
          <Studio/>
          <Projects/>
          <News/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Title_imgs from "../components/Home/Title_imgs/Title_imgs";
    import Studio from "../components/shared/Studio";
    import Projects from "../components/shared/Projects";
    import News from "../components/shared/News";


    export default {
        name: 'App',
        components: {Title_imgs, Studio, Projects, News},
    }
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
        background-color: #FFFFFF;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 800;
        overflow: hidden;


        .main-page_content {
          width: 100%;
          display: flex;
          flex-direction: column;
          background-color: #FFFFFF;
        }
      }
    }
  }

</style>
