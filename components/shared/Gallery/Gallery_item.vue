<template>
  <div>
  <div class="gallery-item">

    <div class="gallery-item-img-wrap"
         @mouseover="setGalleryCursorActive(true)"
         @mouseout="setGalleryCursorActive(false)"
    >
<!--      <Image_Scale_Block :img="imgProps" :appointment="'news'"/>-->
      <img :src="imgProps" alt="">
    </div>

    <span class="date-text">{{dateProps}}</span>
  <nuxt-link to="/Item_News">
    <span class="title">{{ titleProps }}</span>
    <div class="teg-container">
      <span class="text-very-small">Office</span>
      <span class="text-very-small">Healthcare</span>
      <span class="text-very-small">Laboratory</span>
      <span class="text-very-small">Atrium</span>
    </div>
  </nuxt-link>
  </div>
  </div>
</template>

<script>
    import Image_Scale_Block from "../Image_Scale_Block";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Gallery_item",
        components: {Image_Scale_Block},
        props: ["imgProps", "titleProps", "dateProps"],
        methods: {
          ...mapActions('app', ['setGalleryCursorActive']),
        }
    };
</script>

<style lang="scss" scoped>

  .gallery-item {
    position: relative;
    width: 375px;
    height: 440px;
    margin-right: 20px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;

    .gallery-item-img-wrap {
      width: 100%;
      height: 340px;
      overflow: hidden;
      cursor: none;
      &:hover img {
        transform: scale(1.2);
      }
      img {
        transition: .3s;
        pointer-events: none;
      }
    }
    a {
      cursor: pointer;
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
      cursor: pointer;
    }

    .teg-container {
      max-width: 280px;
      display: flex;
      margin-top: 2px;
      justify-content: space-between;
      span {
        cursor: pointer;
      }
      cursor: pointer;
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
