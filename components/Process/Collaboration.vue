<template>
  <div class="collaboration">
    <span class="block-title">collaboration</span>
    <span class="content-title process_content-title_margin">The way we work</span>

    <div class="content-block">
      <div class="content-column-1">
      <p class="content-p">Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the
        Netherlands as well as international. UP is unique projects. Every client, corporate or private, is unique. It
        is our ambition to create distinctive designs that reflect the soul and personal identity of our clients.
        Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as
        well
        as international.
        UP is unique projects.</p>
      </div>
      <div class="content-column-2">
        <div class="img-wrap process_img-wrap_height">
          <Image_Scale_Block :img="'images/Item_Project/contentImg2.jpg'" appointment="process"/>
        </div>

        <p class="content-p process_img-description_margin-top process_img-description_width">
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

    .content-block {
      display: flex;
      width: 100%;

      .content-column-1 {
        display: flex;
        flex-direction: column;
        width: calc(270px + var(--main-big-margin) + var(--main-very-mini-margin));

        .content-p {
          display: flex;
          width: 270px;
          margin-left: var(--main-big-margin);
          margin-right: var(--main-very-mini-margin);
        }
      }

      .content-column-2  {
        width: calc(100% - 270px - var(--main-big-margin) - var(--main-very-mini-margin));
        display: flex;
        flex-direction: column;

        .img-wrap {
          width: 100%;
        }

        .content-p {
          width: calc(100% - var(--main-mini-margin));
        }

        .content-p {
          align-self: flex-end;
          margin-right: var(--main-mini-margin);
          margin-left: 0;
        }
      }
    }
  }

  @media (max-width: 1280px) {
    .collaboration {
      margin-bottom: 182px;
      .content-block{
        display: flex;
        width: 100%;
        .content-column-1{
          width: calc(50% + var(--main-very-mini-margin) / 2);
          .content-p{
            margin-left: var(--main-big-margin);
            margin-right: var(--main-very-mini-margin);
            width: unset;
          }
        }
        .content-column-2{
          width: calc(50% -  var(--main-very-mini-margin) / 2);
        }
      }
    }
  }

  @media  (max-width: 1024px) {
    .collaboration{
      margin-bottom: 114px;
      .content-title{
       margin-bottom: 72px;
      }
    }
  }
  @media  (max-width: 768px) {
    .collaboration{
      margin-bottom: 104px;
      .content-title{
        margin-top: 40px;
        margin-bottom: 18px;
      }
    }
  }
</style>
