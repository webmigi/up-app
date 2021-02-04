<template>
  <div class="projects-block">
    <span class="main-page__content-title-position block-title">featured projects</span>
    <div class="content-block">
      <div class="content-img-wrap"
           v-for="(item, index) in contentImgs"
           :key="index"
           :style="'grid-area:'+(projectsGridAreas[index])">
        <Image_Scale_Block :img="item.img"/>
        <div class="item-project-title">
          {{item.title}}
        </div>
      </div>
    </div>
    <div class="project_btn_wrap">
      <Content_btn title="Explore all projects"/>
    </div>
  </div>
</template>

<script>
    import Image_Scale_Block from "../shared/Image_Scale_Block";
    import Content_btn from "../shared/elements/Content_btn";

    import img1 from '@/static/images/Home/Project/content1.jpg';
    import img2 from '@/static/images/Home/Project/content2.jpg';
    import img3 from '@/static/images/Home/Project/content3.jpg';
    import img4 from '@/static/images/Home/Project/content4.jpg';

    export default {
        name: 'Projects',
        components: {Image_Scale_Block, Content_btn},
        data() {
            return {
                contentImgs: [
                    {img: img1, title: 'RB'},
                    {img: img2, title: 'Nyenrode'},
                    {img: img3, title: "5CA int."},
                    {img: img4, title: 'OG'}],
                projectsGridAreas: ['a', 'b', 'c', 'd']
            }
        }
    }
</script>

<style lang="scss" scoped>
  .projects-block {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 210px;

    .content-block {
      margin: 82px 120px 110px 120px;
      display: grid;
      grid-template-rows: 840px 840px;
      grid-template-columns: calc((100% - 60px) / 2) calc((100% - 60px) / 2);
      grid-template-areas: "a b" "c d";
      gap: 60px;

      .content-img-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;


        .item-project-title {
          position: absolute;
          bottom: 60px;
          left: 60px;
          align-self: flex-end;
          font-family: Garamond;
          font-style: normal;
          font-weight: bold;
          font-size: 46.88px;
          line-height: 141%;
          letter-spacing: -0.04em;
          color: #FFFFFF;
        }
      }
    }

    .project_btn_wrap {
      width: 203px;
      height: 40px;
      margin-right: 210px;
      margin-left: auto;
    }
  }
</style>
