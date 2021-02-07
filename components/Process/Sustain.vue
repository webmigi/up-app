<template>
  <div class="sustain">
    <span class="block-title">sustain ability</span>
    <span class="content-title">How we do it</span>

    <div class="content-block">
      <div class="span-1">
      <div class="content-column-1">
        <p class="content-p">Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the
          Netherlands as well as international. UP is unique projects. Every client, corporate or private, is unique. It
          is our ambition to create distinctive designs that reflect the soul and personal identity of our clients.
          Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as
          well
          as international.
          UP is unique projects.</p>
        <p class="content-p" style="margin-bottom: 0">Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the
          Netherlands as well as international. UP is unique projects. Every client, corporate or private, is unique. It
          is our ambition to create distinctive designs that reflect the soul and personal identity of our clients.
          Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as
          well
          as international.
          UP is unique projects.</p>
      </div>
        <div class="img-wrap">
          <Image_Scale_Block :img="'images/Item_Project/contentImg3_2.jpg'" appointment="people"/>
        </div>
    </div>

      <div class="img-wrap-2">
        <Image_Scale_Block :img="'images/Item_Project/contentImg3_3.jpg'" appointment="people"/>
      </div>

    </div>
  </div>
</template>

<script>
    import Image_Scale_Block from "../shared/Image_Scale_Block";

    export default {
        name: 'Sustain',
        components: {Image_Scale_Block}
    }
</script>

<style lang="scss" scoped>
  .sustain {
    display: flex;
    flex-direction: column;
    margin-bottom: 200px;

    .block-title{
      margin-left: var(--main-big-margin);
    }

    .content-title {
      margin-top: 83px;
      margin-bottom: 35px;
      margin-left: var(--main-big-margin);
    }

    .content-block {
      display: flex;
      width: 100%;
      flex-direction: column;

      .span-1{
        display: flex;
        width: 100%;
        margin-bottom: 93px;

      .content-column-1 {
        display: flex;
        flex-direction: column;


        .content-p {
          width: 710px;
          margin-left: var(--main-big-margin);
          margin-right: var(--main-very-mini-margin);
          margin-bottom: 75px;
        }
      }
        .img-wrap {
          width: calc(100% - 710px);
          height: 620px;
      }
      }

      .img-wrap-2{
        width: 71%;
        height: 840px;
      }
    }
  }
</style>
