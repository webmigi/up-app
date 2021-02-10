<template>
  <div class="project-content">
    <div v-if="project.styleType===1" class="content-type-1">
      <div class="content-type-1_img-wrap
       item-project_img-wrap_height"
      @click="setModalImgIsActive">
        <Image_Scale_Block :img="project.img[0]" appointment="project"/>
      </div>
      <p v-if="project.description!== undefined"
         class="item-project_img-description_width
         item-project_img-description_margin-top
         content-p">
        {{project.description}}
      </p>
    </div>

    <div v-if="project.styleType===2" class="content-type-2">
      <div class="content-type-2_img-wrap
                 item-project_img-wrap_height">
        <Image_Scale_Block :img="project.img[0]" appointment="project"/>
      </div>
      <p v-if="project.description!== undefined"
         class="item-project_img-description_width
         item-project_img-description_margin-top
         content-p">
        {{project.description}}
      </p>
    </div>

    <div v-if="project.styleType===3" class="content-type-3">
      <div class="span-1">
        <div class="content-type-3_column-1">
          <div :class="['content-type-3_img-wrap-1', {'item-project_img-wrap_height': APP_WINDOW_SIZE.width<=1280}]">
            <Image_Scale_Block :img="project.img[0]" appointment="project"/>
          </div>
          <p v-if="project.description!== undefined"
             class="item-project_img-description_margin-top
         content-p">
            {{project.description}}
          </p>
        </div>
        <div class="content-type-3_column-2">
          <div :class="['content-type-3_img-wrap-2', {'item-project_img-wrap_height': APP_WINDOW_SIZE.width<=1280}]">
            <Image_Scale_Block :img="project.img[1]" appointment="project"/>
          </div>
        </div>
      </div>
      <div class="span-2">
        <div :class="['content-type-3_img-wrap-3', {'item-project_img-wrap_height': APP_WINDOW_SIZE.width<=1280}]">
          <Image_Scale_Block :img="project.img[2]" appointment="project"/>
        </div>
      </div>
    </div>

    <div v-if="project.styleType===4" class="content-type-4">
      <div :class="['content-type-4_img-wrap', {'item-project_img-wrap_height': APP_WINDOW_SIZE.width<=1280}]">
        <Image_Scale_Block :img="project.img[0]" appointment="project"/>
      </div>
    </div>

    <div v-if="project.styleType===5" class="content-type-5">
      <div :class="['content-type-5_img-wrap', {'item-project_img-wrap_height': APP_WINDOW_SIZE.width<=1280}]">
        <Image_Scale_Block :img="project.img[0]" appointment="project"/>
      </div>
      <p v-if="project.description!== undefined"
         class="item-project_img-description_margin-top
         item-project_img-description_width
         content-p">
        {{project.description}}
      </p>
    </div>

    <div v-if="project.styleType===6" class="content-type-6">
      <div :class="['content-type-6_img-wrap', {'item-project_img-wrap_height': APP_WINDOW_SIZE.width<=1280}]">
        <Image_Scale_Block :img="project.img[0]" appointment="project"/>
      </div>
      <p v-if="project.description!== undefined"
         class="item-project_img-description_width
         item-project_img-description_margin-top
         content-p">
        {{project.description}}
      </p>
    </div>

  </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import Image_Scale_Block from "../shared/Image_Scale_Block";

    export default {
        name: 'Item_Project_Content',
        props: ['project'],
        components: {Image_Scale_Block},
        computed: {
            ...mapGetters('app', ['APP_WINDOW_SIZE'])
        },
        methods:{
            ...mapActions('app', ['setModalImgIsActive'])
        }
    }
</script>

<style lang="scss" scoped>
  .project-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;

    .content-type-1 {
      width: 100%;
      margin-right: var(--main-mini-margin);
      display: flex;
      flex-direction: column;
      margin-bottom: 144px;

      .content-type-1_img-wrap {
        width: calc(100% - var(--main-mini-margin));
      }

      .content-p {
        margin-left: var(--main-big-margin);
      }
    }

    .content-type-2 {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-self: flex-end;
      margin-bottom: 167px;

      .content-type-2_img-wrap {
        width: 100%;
      }

      .content-p {
        align-self: flex-end;
        margin-right: var(--main-mini-margin);
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

        .content-type-3_column-1 {
          width: calc(50% + 30px);
          display: flex;
          flex-direction: column;

          .content-type-3_img-wrap-1 {
            width: calc(100% - var(--main-mini-margin) - 100px);
            height: 983px;
            margin-left: var(--main-mini-margin);
            margin-right: 100px;
          }

          .content-p {
            margin-left: var(--main-big-margin);
            margin-right: 100px;
            align-self: flex-end;
          }
        }

        .content-type-3_column-2 {
          display: flex;
          width: calc(50% - 30px);
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

      .content-p {
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

      .content-p {
        align-self: center;
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .project-content {
      .content-type-1 {
        margin-right: 0;
        margin-bottom: 57px;

        .content-type-1_img-wrap {
          width: 100%;
        }
      }

      .content-type-2 {
        margin-bottom: 57px;
      }

      .content-type-3 {
        margin-bottom: 100px;

        .span-1 {
          .content-type-3_column-1 {
            width: calc(((100% - var(--main-very-mini-margin)) / 2) + var(--main-very-mini-margin));

            .content-type-3_img-wrap-1 {
              width: calc(100% - var(--main-mini-margin) - var(--main-very-mini-margin));
              margin-right: var(--main-very-mini-margin);
            }

            .content-p {
              margin-right: var(--main-very-mini-margin);
            }
          }

          .content-type-3_column-2 {
            width: calc(((100% - var(--main-very-mini-margin)) / 2));

            .content-type-3_img-wrap-2 {
              margin-top: 380px;
            }
          }
        }
      }

      .content-type-4 {
        margin-bottom: 100px;
      }

      .content-type-5 {
        margin-right: 0;
        width: 70%;
        margin-bottom: 57px;

        .content-p {
          margin-left: 0;
        }
      }

      .content-type-6 {
        margin-bottom: 187px;

        .content-p {
          align-self: flex-end;
          margin-right: var(--main-mini-margin);
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .project-content {
      .content-type-1 {
        margin-bottom: 90px;
      }

      .content-type-2 {
        width: 73%;
        margin-bottom: 90px;
      }

      .content-type-3 {
        margin-bottom: 90px;

        .span-1 {
          .content-type-3_column-2 {
            margin-bottom: 90px;

            .content-type-3_img-wrap-2 {
              margin-top: 295px;
            }
          }
        }

        .span-2 {
          .content-type-3_img-wrap-3 {
            width: 73%;
          }
        }
      }

      .content-type-4 {
        margin-bottom: 90px;
      }

      .content-type-5 {
        width: 73%;
        margin-bottom: 90px;
      }

      .content-type-6 {
        margin-bottom: 195px;

        .content-p {
          align-self: flex-start;
          margin-left: var(--main-big-margin);
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .project-content {
      .content-type-1 {
        margin-bottom: 60px;

        .content-p {
          align-self: flex-end;
          margin-right: var(--main-mini-margin);
        }
      }

      .content-type-2 {
        width: 72%;
        margin-bottom: 60px;
      }

      .content-type-3 {
        .span-2 {
          .content-type-3_img-wrap-3 {
            width: 72%;
          }
        }
      }

      .content-type-5 {
        width: 72%;
        margin-bottom: 60px;
      }

      .content-type-6 {
        margin-bottom: 155px;

        .content-p {
          margin-left: calc(var(--main-big-margin) - var(--main-mini-margin));
          margin-right: var(--main-mini-margin);
          max-width: unset !important;
        }
      }
    }
  }

  @media screen and (max-width: 414px) {
    .project-content {
      .content-type-1 {
        margin-bottom: 50px;
      }
      .content-type-2{
        width: 100%;
        margin-bottom: 50px;
        .content-p{
          margin-left: var(--main-big-margin);
        }
      }
      .content-type-3{
        margin-bottom: 50px;
        .span-1{
          flex-direction: column;
          .content-type-3_column-1{
            width: 100%;
            margin-bottom: 50px;
            .content-type-3_img-wrap-1{
              width: unset;
              margin-right: 0;
              margin-left: 0;
            }
            .content-p{
              margin-right: var(--main-mini-margin);
            }
          }
          .content-type-3_column-2{
           width: unset;
            margin-bottom: 50px;
            .content-type-3_img-wrap-2{
              margin-top: 0;
            }
          }
        }
        .span-2{
          .content-type-3_img-wrap-3{
            width: 100%;
          }
        }
      }
      .content-type-4{
        margin-bottom: 50px;
      }
      .content-type-5{
        width: unset;
        margin-bottom: 50px;
        .content-p{
          margin-left: var(--main-big-margin);
          margin-right: var(--main-mini-margin);
        }
      }
      .content-type-6{
        margin-bottom: 162px;
        margin-left: 0;
        width: unset;
        .content-p{
          margin-left: var(--main-big-margin);
          margin-right: var(--main-mini-margin);
        }
      }
    }
  }
</style>
