<template>
  <div class="people">
    <div class="title-img-wrap">
      <span class="people-title main-content-margin-left-right main-page_start-text">who we are</span>
      <Image_Scale_Block :img="'/images/People/People-title.jpg'"/>
    </div>
    <People_Studio/>
    <Studio/>
    <News/>
  </div>
</template>

<script>
    import Image_Scale_Block from "../components/shared/Image_Scale_Block";
    import News from "../components/Home/News";
    import People_Studio from "../components/People/People_Studio";
    import Studio from "../components/Home/Studio";

    export default {
        name: 'People',
        components: {Image_Scale_Block, News, People_Studio, Studio}
    }
</script>

<style lang="scss" scoped>
  .people {
    width: 100%;
    display: flex;
    flex-direction: column;

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
</style>
