<template>
  <div class="philosophy">
    <span class="main-page__content-title-position block-title">philosophy</span>
    <span class="content-title process_content-title_margin">The way we work</span>

    <div class="content-block">
      <div class="content-column-1">
        <p class="content-p">{{'Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as well as international. UP is unique projects. Every client, corporate or private, is unique. It is our ambition to create distinctive designs that reflect the soul and personal identity of our clients. Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as well as international. UP is unique projects.\n'+
          '\n'+'Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as well as international. UP is unique projects. Every client, corporate or private, is unique. It is our ambition to create distinctive designs that reflect the soul and personal identity of our clients. Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as well as international. UP is unique projects.'}}</p>
      </div>
      <div class="content-column-2">
        <div class="img-wrap process_img-wrap_height">
          <Image_Scale_Block :img="'images/Item_Project/contentImg1.jpg'" appointment="people"/>
        </div>
        <p class="content-p process_img-description_margin-top">
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
        name: 'Philosophy',
        components: {Image_Scale_Block}
    }
</script>

<style lang="scss" scoped>
  .philosophy {
    display: flex;
    flex-direction: column;
    margin-bottom: 382px;

    .content-block {
      display: flex;
      width: 100%;

      .content-column-1 {
        display: flex;
        flex-direction: column;
        width: calc(50% + var(--main-very-mini-margin) / 2);

        .content-p {
          margin-left: var(--main-big-margin);
          margin-right: var(--main-very-mini-margin);
          white-space: pre-line;
        }
      }

      .content-column-2 {
        display: flex;
        flex-direction: column;
        width: calc(50% -  var(--main-very-mini-margin) / 2);

        .img-wrap {
          width: 100%;
        }
       .content-p{
         margin-right: var(--main-mini-margin);
       }
      }
    }
  }
  @media screen and (max-width: 1280px) {
.philosophy{
  margin-bottom: 165px;
}
  }
  @media screen and (max-width: 1024px) {
.philosophy{
  margin-bottom: 128px;
  .content-title{
    margin-bottom: 69px;
  }
   }
  }
  @media screen and (max-width: 768px) {
    .philosophy{
      margin-bottom: 120px;
    }
  }
  @media screen and (max-width: 414px) {
    .philosophy{
      margin-bottom: 119px;
      .content-block{
        flex-direction: column;
        .content-column-1{
          width: unset;
          margin-bottom: 50px;
        }
        .content-column-2{
          width: unset;
          .content-p{
            margin-left: var(--main-big-margin);
          }
        }
      }
    }
  }
</style>
