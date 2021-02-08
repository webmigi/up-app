<template>
  <div class="gallery-item">

    <div class="gallery-item-img-wrap">
      <Image_Scale_Block :img="imgProps" :appointment="'spinner'"/>
    </div>

    <span class="date">{{dateProps}}</span>
    <span class="title">{{ titleProps }}</span>
    <div class="teg-container">
      <span class="text-very-small">Office</span>
      <span class="text-very-small">Healthcare</span>
      <span class="text-very-small">Laboratory</span>
      <span class="text-very-small">Atrium</span>
    </div>

  </div>
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

    .gallery-item-img-wrap {
      width: 100%;
      height: 340px;
    }

    .date {
      font-family: Helvetica;
      font-style: normal;
      font-weight: 300;
      font-size: 15.36px;
      line-height: 100%;
      text-transform: capitalize;
      color: #000000;
      margin-top: 17px;
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
    }

    .teg-container {
      max-width: 280px;
      display: flex;
      margin-top: 2px;
      justify-content: space-between;
    }
  }

  .classNoMargin {
    margin-right: 0;
  }
</style>
