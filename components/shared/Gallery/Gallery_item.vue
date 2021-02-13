<template>
  <nuxt-link to="/Item_News">
  <div class="gallery-item">

    <div class="gallery-item-img-wrap">
      <Image_Scale_Block :img="imgProps" :appointment="'news'"/>
    </div>

    <span class="date-text">{{dateProps}}</span>
    <span class="title">{{ titleProps }}</span>
    <div class="teg-container">
      <span class="text-very-small">Office</span>
      <span class="text-very-small">Healthcare</span>
      <span class="text-very-small">Laboratory</span>
      <span class="text-very-small">Atrium</span>
    </div>

  </div>
  </nuxt-link>
</template>

<script>
    import Image_Scale_Block from "../Image_Scale_Block";

    export default {
        name: "Gallery_item",
        components: {Image_Scale_Block},
        props: ["imgProps", "titleProps", "dateProps"]
    };
</script>

<style lang="scss" scoped>
  .gallery-item {
    position: relative;
    width: 375px;
    height: 440px;
    display: flex;
    flex-direction: column;
    cursor: none;

    .gallery-item-img-wrap {
      width: 100%;
      height: 340px;
    }

    .title {
      font-family: Garamond;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 141%;
      letter-spacing: -0.04em;
      color: #000000;
      margin-top: 14px;
      cursor: none;
    }

    .teg-container {
      max-width: 280px;
      display: flex;
      margin-top: 2px;
      justify-content: space-between;
      cursor: none;
      .text-very-small{
        cursor: none;
      }
    }
  }

  .classNoMargin {
    margin-right: 0;
  }

  @media screen and (max-width: 1280px) {
    .gallery-item {
      width: 300px;
      height: 340px;

      .gallery-item-img-wrap{
        height: 240px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .gallery-item {
      width: 290px;
      height: 330px;

      .gallery-item-img-wrap{
        height: 230px;
      }
    }
  }
</style>
