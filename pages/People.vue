<template>
  <div class="people">
    <div class="title-img-wrap">
      <span class="people-title main-content-margin-left-right main-page_start-text">who we are</span>
      <Image_Scale_Block :img="'/images/People/People-title.jpg'"/>
    </div>
    <People_Studio/>
    <Studio/>
    <Team/>
    <News/>
    <Jobs/>
    <Jobs_Footer/>
  </div>
</template>

<script>
    import Image_Scale_Block from "../components/shared/Image_Scale_Block";
    import News from "../components/shared/News";
    import People_Studio from "../components/People/People_Studio";
    import Studio from "../components/shared/Studio";
    import Team from "../components/People/Team";
    import Jobs from "../components/People/Jobs/Jobs";
    import Jobs_Footer from "../components/People/People_Footer";

    export default {
        name: 'People',
        components: {Image_Scale_Block, News, People_Studio, Studio, Team, Jobs, Jobs_Footer}
    }
</script>

<style lang="scss" scoped>
  .people {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 150px;

    .title-img-wrap {
      position: relative;
      width: 100%;
      height: var(--winHeight);
      display: flex;
      align-items: center;

      .people-title {
        position: absolute;
        z-index: 1;
      }
    }
  }
  @media screen and (max-width: 1280px){
    .people{
      margin-bottom: 130px;
    }
  }
</style>
