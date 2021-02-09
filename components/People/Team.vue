<template>
  <div class="team-block">
    <span class="main-page__content-title-position block-title">team</span>
    <div class="team_content-block">
      <div class="team_img-wrap">
        <Image_Scale_Block :img="'/images/People/Team/team.jpg'"/>
        <div class="img-description">
          <span class="team-img-description-text" style="margin-bottom: 6px">Nick</span>
          <span class="block-title text-color-white">ceo</span>
        </div>
      </div>
      <div class="team_text-block__wrap">
        <div class="team_text-block">
          <span class="content-title">Meet up</span>
          <p class="team__text_p content-p">
            up architecture makes unique projects. Every client, corporate or private is unique. It is our ambition to
            create distinctive design that reflect the sould and personal identity of our clients.up architecture makes
            unique projects. Every client, corporate or private is unique. It is our ambition to create distinctive
            design that reflect the sould and personal identity of our clients.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Image_Scale_Block from "../shared/Image_Scale_Block";

    export default {
        name: 'Team',
        components: {Image_Scale_Block}
    }
</script>


<style lang="scss" scoped>
  .team-block {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .team_content-block {
      width: calc(100% - var(--main-big-margin) -  var(--main-mini-margin));
      margin-left: var(--main-big-margin);
      margin-right: var(--main-mini-margin);
      margin-top: 82px;
      display: flex;
      justify-content: space-between;

      .team_img-wrap {
        position: relative;
        display: flex;
        width: calc((100% - 60px) / 2 - 50px);
        height: 880px;

        .img-description{
          position: absolute;
          bottom: 30px;
          left: 30px;
          display: flex;
          flex-direction: column;
        }
      }

      .team_text-block__wrap {
        width: calc((100% - 60px) / 2 + 50px);
        display: flex;

        .team_text-block {
          display: flex;
          flex-direction: column;

          .team__text_p {
            margin-top: 167px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1280px){
    .team-block{
      .team_content-block{
        .team_img-wrap{
          height: 490px;
        }
        .team_text-block__wrap{
          .team_text-block{
            justify-content: space-between;
            .team__text_p{
              margin-top: 0;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px){
    .team-block{
      .team_content-block{
        width: 100%;
        margin-left: 0;
        margin-right: 0;
        .team_img-wrap{
          width: calc((100% - var(--main-very-mini-margin))/ 2 - var(--main-mini-margin));
          margin-left: var(--main-mini-margin);
          margin-right: var(--main-very-mini-margin);
        }
        .team_text-block__wrap{
          width: calc((100% - var(--main-very-mini-margin))/ 2);
        }
      }
    }
  }
</style>
