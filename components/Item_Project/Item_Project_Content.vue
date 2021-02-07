<template>
  <div class="project-content">
    <div v-if="project.styleType===1" class="content-type-1 main-content-margin-left-right">
      <div class="content-type-1_img-wrap">
        <Image_Scale_Block :img="project.img[0]" appointment="project"/>
      </div>
      <p v-if="project.description!== undefined"
         class="content-type-1_description
         img-description-margin-top
         content-p
         pages-content-margin-left-big">
        {{project.description}}
      </p>
    </div>

    <div v-if="project.styleType===2" class="content-type-2">
      <div class="content-type-2_img-wrap">
        <Image_Scale_Block :img="project.img[0]" appointment="project"/>
      </div>
      <p v-if="project.description!== undefined"
         class="content-type-2_description
         img-width-description
         img-description-margin-top
         content-p
         pages-content-margin-left-big">
        {{project.description}}
      </p>
    </div>

    <div v-if="project.styleType===3" class="content-type-3">
      <div class="span-1">
        <div class="content-type-3_column-1">
          <div class="content-type-3_img-wrap-1">
            <Image_Scale_Block :img="project.img[0]" appointment="project"/>
          </div>
          <p v-if="project.description!== undefined"
             class="content-type-3_description
         img-description-margin-top
         content-p
         pages-content-margin-left-big">
            {{project.description}}
          </p>
        </div>
        <div class="content-type-3_column-2">
          <div class="content-type-3_img-wrap-2">
            <Image_Scale_Block :img="project.img[1]" appointment="project"/>
          </div>
        </div>
      </div>
      <div class="span-2">
        <div class="content-type-3_img-wrap-3">
          <Image_Scale_Block :img="project.img[2]" appointment="project"/>
        </div>
      </div>
    </div>

    <div v-if="project.styleType===4" class="content-type-4">
      <div class="content-type-4_img-wrap">
        <Image_Scale_Block :img="project.img[0]" appointment="project"/>
      </div>
      <p v-if="project.description!== undefined"
         class="content-type-4_description
         img-description-margin-top
         content-p">
        {{project.description}}
      </p>
    </div>

    <div v-if="project.styleType===5" class="content-type-5">
      <div class="content-type-5_img-wrap">
        <Image_Scale_Block :img="project.img[0]" appointment="project"/>
      </div>
      <p v-if="project.description!== undefined"
         class="content-type-5_description
         img-description-margin-top
         img-width-description
         content-p">
        {{project.description}}
      </p>
    </div>

    <div v-if="project.styleType===6" class="content-type-6">
      <div class="content-type-6_img-wrap">
        <Image_Scale_Block :img="project.img[0]" appointment="project"/>
      </div>
      <p v-if="project.description!== undefined"
         class="content-type-6_description
         img-width-description
         img-description-margin-top
         content-p">
        {{project.description}}
      </p>
    </div>


  </div>
</template>

<script>
    import Image_Scale_Block from "../shared/Image_Scale_Block";

    export default {
        name: 'Item_Project_Content',
        props: ['project'],
        components: {Image_Scale_Block},
    }
</script>

<style lang="scss" scoped>
  .project-content {
    display: flex;
    flex-direction: column;
    width: 100%;

    .content-type-1 {
      width: 100%;
      margin-left: 0;
      display: flex;
      flex-direction: column;
      margin-bottom: 144px;

      .content-type-1_img-wrap {
        height: 800px;
        width: calc(100% - 120px);
      }

      .content-type-1_description {
        width: calc((100% - 60px) / 2);
      }
    }

    .content-type-2 {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-self: flex-end;
      margin-bottom: 167px;

      .content-type-2_img-wrap {
        height: 800px;
        width: 100%;
      }

      .content-type-2_description {
        align-self: flex-end;
        margin-right: 120px;
      }
    }

    .content-type-3 {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 280px;

      .span-1 {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .content-type-3_column-1 {
          width: calc(((100% - 100px) / 2) - 40px);
          display: flex;
          flex-direction: column;

          .content-type-3_img-wrap-1 {
            height: 983px;
            margin-left: var(--main-mini-margin);
          }

          .content-type-3_description {
            align-self: flex-end;
          }
        }

        .content-type-3_column-2 {
          display: flex;
          width: calc(((100% - 100px) / 2) + 40px);
          margin-bottom: 100px;

          .content-type-3_img-wrap-2 {
            width: 100%;
            height: 620px;
            margin-top: 673px;
          }
        }
      }

      .span-2 {
        width: 100%;
        display: flex;

        .content-type-3_img-wrap-3 {
          width: 70%;
          height: 840px;
        }
      }
    }

    .content-type-4 {
      width: 100%;
      margin-bottom: 280px;

      .content-type-4_img-wrap {
        width: 100%;
        height: var(--winHeight);
      }

      .content-type-4_description {
        margin-left: var(--main-big-margin);
      }
    }

    .content-type-5 {
      width: 65%;
      display: flex;
      flex-direction: column;
      align-self: flex-end;
      margin-right: var(--main-mini-margin);
      margin-bottom: 280px;

      .content-type-5_img-wrap {
        width: 100%;
        height: 970px;
      }

      .content-type-5_description {
        margin-left: var(--main-mini-margin);
      }
    }

    .content-type-6 {
      width: calc(100% - var(--main-mini-margin));
      display: flex;
      flex-direction: column;
      align-self: flex-end;
      margin-left: var(--main-mini-margin);
      margin-bottom: 125px;

      .content-type-6_img-wrap {
        width: 100%;
        height: 970px;
      }

      .content-type-6_description {
        align-self: center;
      }
    }
  }
</style>
