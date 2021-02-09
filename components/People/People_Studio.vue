<template>
  <div class="people-studio">
    <span class="main-page__content-title-position block-title">studio</span>
    <span class="content-title">Explore the studio</span>

    <div class="content-block">
      <p class="content-p">up architecture makes unique projects. Every client, corporate or private is unique. It is
        our ambition to create distinctive design that reflect the sould and personal identity of our clients.up
        architecture makes unique projects. Every client, corporate or private
        is unique. It is our ambition to create distinctive design that reflect the sould and personal identity of our
        clients.up architecture makes unique projects. Every client, corporate or private is unique. It is our ambition
        to create distinctive design that reflect the sould and personal identity of our clients.up architecture makes
        unique projects. Every client, corporate or private
        is unique. It is our ambition to create distinctive design that reflect the sould and personal identity of our
        clients.</p>

      <div class="content-column-2">
        <div class="img-wrap">
          <Image_Scale_Block :img="'images/Item_Project/contentImg1.jpg'" appointment="people"/>
        </div>
        <p class="img-description process_img-description_margin-top content-p img-width-description">
          Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as
          well as international. UP is unique projects.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
    import Image_Scale_Block from "../shared/Image_Scale_Block";

    export default {
        name: 'People_Studio',
        components: {Image_Scale_Block}
    }
</script>

<style lang="scss" scoped>
  .people-studio {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 94px;

    .content-title {
      margin-top: 83px;
      margin-bottom: 35px;
      margin-left: var(--main-big-margin);
    }

    .content-block {
      display: flex;
      width: 100%;

      .content-p {
        width: 420px;
        margin-left: var(--main-big-margin);
        margin-right: var(--main-very-mini-margin);
      }

      .content-column-2 {
        width: calc(100% - 700px);
        display: flex;
        flex-direction: column;

        .img-wrap {
          width: 100%;
          height: 800px;
        }

        .img-description {
          margin-left: 100px;
        }
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .people-studio {
      margin-bottom: 50px;
      .content-block {
        .content-column-2 {
          width: calc(100% - 670px);

          .img-wrap {
            height: 580px;
          }
          .img-description{
            margin-left: 0;
            max-width: 490px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px){
  .people-studio{
    margin-bottom: 20px;
    .content-title{
      margin-bottom: 69px;
    }
    .content-block{
      .content-p{
        width: calc(50% - var(--main-big-margin) - var(--main-very-mini-margin) / 2);
      }
      .content-column-2{
        width: calc(50% - var(--main-very-mini-margin) / 2);
        .img-wrap{
          height: 520px;
        }
        .img-description{
          width: calc(100% - var(--main-mini-margin)) !important;
          /*margin-right: var(--main-mini-margin) !important;*/
          margin-right: 0 !important;
        }
      }
    }
  }
  }
  @media screen and (max-width: 1024px){
    .people-studio{
      margin-bottom: 0;
    }
  }
</style>
