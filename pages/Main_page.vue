<template>
  <div class="main-page">
    <Title_imgs/>
    <div class="main-page_content">
      <Studio/>
      <Projects/>
      <News/>
      <Footer/>
    </div>
  </div>
</template>

<script>
    import Title_imgs from '@/components/Main-page/Title_imgs'
    import Studio from "../components/Main-page/Studio";
    import Projects from "../components/Main-page/Projects";
    import News from "../components/Main-page/News";
    import Footer from "../components/shared/Footer";

    export default {
        name: 'Main_page',
        components: {Title_imgs, Studio, Projects, News, Footer},
    }
</script>

<style lang="scss" scoped>
  .main-page {
    width: 100%;
    display: flex;
    flex-direction: column;

    .main-page_content {
      width: 100%;
      display: flex;
      flex-direction: column;
      background-color: #FFFFFF;
      z-index: 800;
    }
  }
</style>
