<template>
  <div class="collaboration">
    <span class="block-title">collaboration</span>
    <span class="content-title">The way we work</span>

    <div class="content-block">
      <p class="content-p">Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the
        Netherlands as well as international. UP is unique projects. Every client, corporate or private, is unique. It
        is our ambition to create distinctive designs that reflect the soul and personal identity of our clients.
        Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as
        well
        as international.
        UP is unique projects.</p>

      <div class="img-container">
        <div class="img-wrap">
          <Image_Scale_Block :img="'images/Item_Project/contentImg2.jpg'" appointment="process"/>
        </div>

        <p class="content-p img-description-margin-top">
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
        name: 'Collaboration',
        components: {Image_Scale_Block}
    }
</script>

<style lang="scss" scoped>
  .collaboration {
    display: flex;
    flex-direction: column;
    margin-bottom: 425px;

    .block-title {
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

      .content-p {
        display: flex;
        width: 270px;
        margin-left: var(--main-big-margin);
        margin-right: var(--main-very-mini-margin);
      }

      .img-container {
        width: calc(100% - 270px - var(--main-big-margin) - var(--main-very-mini-margin));
        display: flex;
        flex-direction: column;

        .content-p {
          width: calc(100% - var(--main-mini-margin));
          max-width: 810px;
        }

        .img-wrap {
          width: 100%;
          height: 800px;
        }

        .content-p {
          align-self: flex-end;
          margin-right: var(--main-mini-margin);
          margin-left: 0;
        }
      }
    }
  }

  @media screen and (max-height: 1280px) {
    .collaboration {
      margin-bottom: 182px;
      .content-block {
        width: calc(100% - var(--main-big-margin));
        margin-left: var(--main-big-margin);
        display: flex;
        justify-content: space-between;

        .content-p {
          margin-left: 0;
          margin-right: 0;
          width: 43%;
          padding-right: 40px;
        }

        .img-container {
          width: 57%;

          .content-p{
            padding: 0;
          }

          .img-wrap {
            height: 580px;
          }
        }
      }
    }
  }
</style>
