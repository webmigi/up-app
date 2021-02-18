<template>
  <div class="studio-block">
    <span class="main-page__content-title-position block-title">studio</span>
    <div class="studio_content-block">
      <div class="studio_img-wrap">
        <ScrollScaleOpacity>
          <img :src="ContentImg" alt="">
        </ScrollScaleOpacity>
<!--        <Image_Scale_Block :opacity="true" :img="ContentImg"/>-->
      </div>
      <div class="studio_text-block__wrap">
        <div :class="['studio_text-block', {'studio-people_text-block':this.$route.path === '/People'}]">
          <span class="content-title">About</span>
          <p class="studio__text_p content-p">
            Founded in 2018 by Anne Boonstra
            UP works on both architecture
            and interior projects in the Netherlands as well as international. UP is unique projects. Every client,
            corporate
            or private, is unique. It is our ambition to create distinctive designs that reflect
            the soul and personal identity
            of our clients.
          </p>
          <div v-if="this.$route.path === '/'" class="studio_btn_wrap">
            <nuxt-link :to="'/People'">
            <Content_btn title="Learn more"/>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Image_Scale_Block from "./Image_Scale_Block";
    import Content_btn from "./elements/Content_btn";
    import ContentImg from '@/static/images/Home/Studio/content.jpg'
    import ScrollScaleOpacity from '@/components/ScrollScaleOpacity'

    export default {
        name: 'Studio',
        components: {Image_Scale_Block, Content_btn, ScrollScaleOpacity},
        data() {
            return {
                ContentImg
            }
        }
    }
</script>


<style lang="scss" scoped>
  .studio-block {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .studio_content-block {
      width: 100%;
      margin-top: 82px;
      height: 660px;
      display: flex;
      justify-content: space-between;

      .studio_img-wrap {
        display: flex;
        width: calc((100% - var(--main-very-mini-margin)) / 2);
      }

      .studio_text-block__wrap {
        width: calc((100% - var(--main-very-mini-margin)) / 2);
        display: flex;

        .studio_text-block {
          max-width: 375px;
          margin-right: var(--main-mini-margin);
          display: flex;
          flex-direction: column;

          .studio__text_p {
            margin-top: 35px;
          }

          .studio_btn_wrap {
            width: 123px;
            height: 40px;
            margin-top: 60px;
          }
        }

        .studio-people_text-block {
          width: unset;
          margin-right: var(--main-mini-margin);
        }
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .studio-block {
      .studio_content-block {
        height: 580px;

        .studio_text-block__wrap {
          .studio_text-block {
            max-width: unset;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .studio-block {
      .studio_content-block {
        height: unset;

        .studio_img-wrap {
          height: 470px;
        }

        .studio_text-block__wrap {

          .studio_text-block {
            .studio__text_p {
              margin-top: 40px;
            }

            .studio_btn_wrap {
              width: 103px;
              height: 33px;
              margin-top: 80px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .studio-block {
      .studio_content-block {
        margin-top: 80px;

        .studio_text-block__wrap {
          .studio_text-block {
            .studio_btn_wrap {
              margin-top: 40px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 428px) {
    .studio-block {
      .studio_content-block {
        margin-top: 80px;
        flex-direction: column;

        .studio_text-block__wrap {
          order: 1;
          width: unset;
          margin-left: var(--main-big-margin);
          margin-right: var(--main-mini-margin);

          .studio_text-block {
            .studio__text_p {
              margin-top: 30px;
            }

            .studio_btn_wrap {
              margin-top: 30px;
            }
          }
        }

        .studio_img-wrap {
          margin-top: 87px;
          width: unset;
          order: 2;
        }
      }
    }
  }
</style>
