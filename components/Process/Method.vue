<template>
  <div class="method">
    <span class="block-title">design method</span>
    <span class="content-title process_content-title_margin">How we do it</span>

    <div class="content-block-span-1">
      <div class="content-column-1">
        <p class="content-p">Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the
          Netherlands as well as international. UP is unique projects. Every client, corporate or private, is unique. It
          is our ambition to create distinctive designs that reflect the soul and personal identity of our clients.
          Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as
          well
          as international.
          UP is unique projects.</p>
      </div>
      <div class="img-wrap process_img-wrap_height">
        <Image_Scale_Block :img="'images/Item_Project/contentImg2.jpg'" appointment="process"/>
      </div>
    </div>


    <div class="content-block-span-2">
      <div class="content-block-span-2__column-1">
        <div :class="['img-wrap-2',{'process_img-wrap_height': APP_WINDOW_SIZE.width <= 1280}]">
          <Image_Scale_Block :img="'images/Item_Project/contentImg3_1.jpg'" appointment="process"/>
        </div>
        <p class="content-p process_img-description_margin-top">
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
        <div :class="['img-wrap-3',{'process_img-wrap_height': APP_WINDOW_SIZE.width <= 1280}]">
          <Image_Scale_Block :img="'images/Item_Project/contentImg3_2.jpg'" appointment="process"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Image_Scale_Block from "../shared/Image_Scale_Block";

    export default {
        name: 'Method',
        components: {Image_Scale_Block},
        computed:{
            ...mapGetters('app', ['APP_WINDOW_SIZE'])
        }
    }
</script>

<style lang="scss" scoped>
  .method {
    display: flex;
    flex-direction: column;
    margin-bottom: 251px;

    .block-title {
      margin-left: var(--main-big-margin);
    }

    .content-block-span-1 {
      display: flex;
      width: 100%;
      margin-bottom: 100px;

      .content-column-1 {
        display: flex;
        flex-direction: column;
        width: calc(275px + var(--main-big-margin) + var(--main-very-mini-margin));

        .content-p {
          display: flex;
          width: 275px;
          margin-left: var(--main-big-margin);
          margin-right: var(--main-very-mini-margin);
        }
      }

      .img-wrap {
        width: calc(100% - 275px - var(--main-big-margin) - var(--main-very-mini-margin));
      }
    }

    .content-block-span-2 {
      display: flex;
      width: 100%;

      .content-block-span-2__column-1 {
        width: calc(50% + var(--main-very-mini-margin) / 2);
        display: flex;
        flex-direction: column;

        .img-wrap-2 {
          width: calc(100% - var(--main-mini-margin) - var(--main-very-mini-margin));
          margin-left: var(--main-mini-margin);
          margin-right: var(--main-very-mini-margin);
          height: 983px;
        }

        .content-p {
          margin-left: var(--main-big-margin);
          max-width: calc(100% - var(--main-big-margin) - 100px);
        }
      }

      .content-block-span-2__column-2 {
        width: calc(50% - var(--main-very-mini-margin) / 2);
        display: flex;
        flex-direction: column;

        .content-p {
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
    .method {
      margin-bottom: 158px;
      .content-title{
        margin-bottom: 83px;
      }
      .content-block-span-1{
        .content-column-1{
          width: calc(50% + var(--main-very-mini-margin) / 2);
          .content-p{
            margin-left: var(--main-big-margin);
            margin-right: var(--main-very-mini-margin);
            width: unset;
          }
        }
        .img-wrap{
          width: calc(50% -  var(--main-very-mini-margin) / 2);
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .method {
      margin-bottom: 108px;
      .content-title{
       margin-bottom: 120px;
      }
      .content-block-span-2{
        .content-block-span-2__column-2{
          .img-wrap-3{
            margin-top: 78px;
          }
        }
      }
    }
  }
</style>
