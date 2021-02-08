<template>
  <div class="method">
    <span class="block-title">design method</span>
    <span class="content-title">How we do it</span>

    <div class="content-block-span-1">
      <p class="content-p">Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the
        Netherlands as well as international. UP is unique projects. Every client, corporate or private, is unique. It
        is our ambition to create distinctive designs that reflect the soul and personal identity of our clients.
        Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as
        well
        as international.
        UP is unique projects.</p>
      <div class="img-wrap">
        <Image_Scale_Block :img="'images/Item_Project/contentImg2.jpg'" appointment="process"/>
      </div>
    </div>


    <div class="content-block-span-2">
      <div class="content-block-span-2__column-1">
        <div class="img-wrap-2">
          <Image_Scale_Block :img="'images/Item_Project/contentImg3_1.jpg'" appointment="process"/>
        </div>
        <p class="content-p img-description-margin-top">
          Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as
          well as international. UP is unique projects.
          Founded in 2018 by Anne Boonstra UP works on both architecture.
        </p>
      </div>
      <div class="content-block-span-2__column-2">
        <p class="content-p">
          Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as
          well as international. UP is unique projects.
          Every client, corporate or private, is unique. It is our ambition to create distinctive designs that reflect
          the soul and personal identity of our clients. Founded in 2018
          by Anne Boonstra UP works on both architecture and interior projects
          in the Netherlands as well as international. UP is unique projects.
        </p>
        <div class="img-wrap-3">
          <Image_Scale_Block :img="'images/Item_Project/contentImg3_2.jpg'" appointment="process"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Image_Scale_Block from "../shared/Image_Scale_Block";

    export default {
        name: 'Method',
        components: {Image_Scale_Block}
    }
</script>

<style lang="scss" scoped>
  .method {
    display: flex;
    flex-direction: column;
    margin-bottom: 251px;

    .block-title{
      margin-left: var(--main-big-margin);
    }

    .content-title {
      margin-top: 83px;
      margin-bottom: 35px;
      margin-left: var(--main-big-margin);
    }

    .content-block-span-1 {
      display: flex;
      width: 100%;
      margin-bottom: 100px;

      .content-p {
        display: flex;
        width: 275px;
        margin-left: var(--main-big-margin);
        margin-right: var(--main-very-mini-margin);
      }

      .img-wrap {
        width: calc(100% - 275px - var(--main-big-margin) - var(--main-very-mini-margin));
        height: 800px;
      }
    }

    .content-block-span-2 {
      display: flex;
      justify-content: space-between;
      margin-left: var(--main-mini-margin);
      width: calc(100% - var(--main-mini-margin));

      .content-block-span-2__column-1 {
        width: 43%;
        display: flex;
        flex-direction: column;

        .img-wrap-2 {
          width: 100%;
          height: 983px;
        }

        .content-p {
          margin-left: 100px;
        }
      }

      .content-block-span-2__column-2 {
        width: 51%;
        display: flex;
        flex-direction: column;

        .content-p{
          margin-right: var(--main-mini-margin);
        }

        .img-wrap-3 {
          width: 100%;
          height: 620px;
          margin-top: 123px;
        }
      }
    }
  }

@media screen and (max-width: 1280px) {
  .method{
    margin-bottom: 158px;
    .content-block-span-1{
      width: calc(100% - var(--main-big-margin));
      margin-left: var(--main-big-margin);
      display: flex;
      justify-content: space-between;
      .content-p{
        width: 39%;
        margin-left: 0;
        margin-right: 0;
      }
      .img-wrap{
        width: 58%;
        height: 580px;
      }
    }
    .content-block-span-2{
      .content-block-span-2__column-1{
        width: 43%;
        .img-wrap-2{
          height: 580px;
        }
      }
      .content-block-span-2__column-2{
        width: 53%;

        .img-wrap-3{
          height: 580px;
        }
      }
    }
  }
}
</style>
