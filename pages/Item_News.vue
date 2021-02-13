<template>
  <div class="item-news">
    <div class="title-img-wrap">
      <Image_Scale_Block :img="'/images/Item_News/News.jpg'"/>
    </div>
    <div class="content">
      <span class="date-text">11.04.2020</span>
      <span class="item-project-title-text">Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as well as international. UP is unique projects.</span>
      <p class="content-p">
        up architecture makes unique projects. Every client, corporate or private is unique. It is our ambition to
        create distinctive design that reflect the sould and personal identity of our clients.up architecture makes
        unique projects. Every client, corporate or private is unique. It is our ambition to create distinctive design
        that reflect the sould and personal identity of our clients.up architecture makes unique projects. Every client,
        corporate or private is unique. It is our ambition to create distinctive design that reflect the sould and
        personal identity of our clients.up architecture makes unique projects. Every client, corporate or private is
        unique. It is our ambition to create distinctive design that reflect the sould and personal identity of our
        clients.up architecture makes unique projects. Every client, corporate or private is unique. It is our ambition
        to create distinctive design that reflect the sould and personal identity of our clients.up architecture makes
        unique projects. Every client, corporate or private is unique. It is our ambition to create distinctive design
        that reflect the sould and personal identity of our clients.up architecture makes unique projects. Every client,
        corporate or private is unique. It is our ambition to create distinctive design that reflect the sould and
        personal identity of our clients.up architecture makes unique projects. Every client, corporate or private is
        unique. It is our ambition to create distinctive design that reflect the sould and personal identity of our
        clients.up architecture makes unique projects. Every client, corporate or private is unique. It is our ambition
        to create distinctive design that reflect the sould and personal identity of our clients.up architecture makes
        unique projects. Every client, corporate or private is unique. It is our ambition to create distinctive design
        that reflect the sould and personal identity of our clients.up architecture makes unique projects. Every client,
        corporate or private is unique. It is our ambition to create distinctive design that reflect the sould and
        personal identity of our clients.up architecture makes unique projects. Every client, corporate or private is
        unique. It is our ambition to create distinctive design that reflect the sould and personal identity of our
        clients.up architecture makes unique projects. Every client, corporate or private is unique. It is our ambition
        to create distinctive design that reflect the sould and personal identity of our clients.up architecture makes
        unique projects. Every client, corporate or private is unique. It is our ambition to create distinctive design
        that reflect the sould and personal identity of our clients.up architecture makes unique projects. Every client,
        corporate or private is unique. It is our ambition to create distinctive design that reflect the sould and
        personal identity of our clients.up architecture makes unique projects. Every client, corporate or private is
        unique. It is our ambition to create distinctive design that reflect the sould and personal identity of our
        clients.
      </p>
      <div class="news-img-wrap">
        <Image_Scale_Block :img="'/images/Home/Studio/content.jpg'"/>
      </div>
      <p class="content-p">
        up architecture makes unique projects. Every client, corporate or private is unique. It is our ambition to
        create distinctive design that reflect the sould and personal identity of our clients.up architecture makes
        unique projects. Every client, corporate or private is unique. It is our ambition to create distinctive design
        that reflect the sould and personal identity of our clients.up architecture makes unique projects. Every client,
        corporate or private is unique. It is our ambition to create distinctive design that reflect the sould and
        personal identity of our clients.up architecture makes unique projects. Every client, corporate or private is
        unique. It is our ambition to create distinctive design that reflect the sould and personal identity of our
        clients.up architecture makes unique projects. Every client, corporate or private is unique. It is our ambition
        to create distinctive design that reflect the sould and personal identity of our clients.up architecture makes
        unique projects. Every client, corporate or private is unique. It is our ambition to create distinctive design
        that reflect the sould and personal identity of our clients.up architecture makes unique projects. Every client,
        corporate or private is unique. It is our ambition to create distinctive design that reflect the sould and
        personal identity of our clients.up architecture makes unique projects. Every client, corporate or private is
        unique. It is our ambition to create distinctive design that reflect the sould and personal identity of our
        clients.up architecture makes unique projects. Every client, corporate or private is unique. It is our ambition
        to create distinctive design that reflect the sould and personal identity of our clients.up architecture makes
        unique projects. Every client, corporate or private is unique. It is our ambition to create distinctive design
        that reflect the sould and personal identity of our clients.up architecture makes unique projects. Every client,
        corporate or private is unique. It is our ambition to create distinctive design that reflect the sould and
        personal identity of our clients.up architecture makes unique projects. Every client, corporate or private is
        unique. It is our ambition to create distinctive design that reflect the sould and personal identity of our
        clients.up architecture makes unique projects. Every client, corporate or private is unique. It is our ambition
        to create distinctive design that reflect the sould and personal identity of our clients.up architecture makes
        unique projects. Every client, corporate or private is unique. It is our ambition to create distinctive design
        that reflect the sould and personal identity of our clients.up architecture makes unique projects. Every client,
        corporate or private is unique. It is our ambition to create distinctive design that reflect the sould and
        personal identity of our clients.up architecture makes unique projects. Every client, corporate or private is
        unique. It is our ambition to create distinctive design that reflect the sould and personal identity of our
        clients.
      </p>
    </div>
    <div class="paginator-wrap">
      <Arrow_Btn :place="'project'" :btnWidth=67 />
    </div>
  </div>
</template>

<script>
    import Image_Scale_Block from "../components/shared/Image_Scale_Block";
    import Arrow_Btn from "../components/shared/elements/Arrow_Btn";

    export default {
        name: 'Item_News',
        components: {Image_Scale_Block, Arrow_Btn}
    }
</script>

<style lang="scss" scoped>
  .item-news {
    width: 100%;
    display: flex;
    flex-direction: column;

    .title-img-wrap {
      position: relative;
      width: 100%;
      height: 730px;
      display: flex;
      align-items: center;
    }

    .content {
      display: flex;
      flex-direction: column;
      margin-left: var(--main-big-margin);
      margin-right: var(--main-mini-margin);

      .date-text {
        margin-top: 57px;
      }

      .item-project-title-text {
        color: black;
        margin-top: 11px;
        margin-bottom: 38px;
      }

      .news-img-wrap {
        width: 100%;
        height: 660px;
        margin: 107px 0 100px 0;
      }
    }
    .paginator-wrap{
      align-self: center;
      width: 195px;
      height: 50px;
      margin: 157px var(--main-mini-margin) 0 var(--main-big-margin);
    }
  }

</style>
