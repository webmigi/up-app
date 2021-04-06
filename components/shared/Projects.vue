<template>
  <div
    :class="[
      'projects-block',
      { 'projects-block_projects-page': this.$route.path === '/project' },
    ]"
  >
    <!--    <span class="main-page__content-title-position block-title">{{-->
    <!--      title-->
    <!--    }}</span>-->
    <div
      v-if="this.$route.path === '/project'"
      class="description pages-content-margin-left-big"
    >
      <div class="description-title">
        <span class="content-title" v-html="projectsPage.title_content"></span>
      </div>
      <p class="content-p" v-html="projectsPage.description"></p>
    </div>

    <div :class="contentBlockClasses">
      <nuxt-link
        :to="'/project/' + item.id"
        :class="[
          'content-img-wrap',
          { 'content-img-wrap-big': bigClass(index) && checkProjectPage },
        ]"
        v-for="(item, index) in projectsList"
        v-if="checkProjectPage ? item : index < 4"
        :key="index"
      >
        <ScrollAnimation class="cover" translate :opacity="false">
          <img :src="getUrl(item.preview.url)" alt=""/>
        </ScrollAnimation>
        <div class="item-project-title">
        <span class="item-project-title-text">
          {{ item.title_card }}
          </span>
          <span class="item-project-title-text-2">
          {{ item.title }}
          </span>
        </div>
      </nuxt-link>
    </div>

    <div v-if="this.$route.path !== '/project'" class="project_btn_wrap">
      <nuxt-link :to="'/project'">
        <Content_btn title="Explore all projects"/>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
    import ScrollAnimation from './../ScrollAnimation';
    import Content_btn from './elements/Content_btn';

    import axios from 'axios';

    export default {
        name: 'Projects',
        components: {ScrollAnimation, Content_btn},

        async fetch() {
            this.projectsList = await fetch(
                'https://strapi-up.verodigital.site/projects-lists',
            ).then(res => res.json());
            this.projectsPage = await fetch(
                'https://strapi-up.verodigital.site/project',
            ).then(res => res.json());
        },

        data() {
            return {
                projectsList: {},
                projectsPage: {},
            };
        },
        methods: {
            getUrl(url) {
                return `https://strapi-up.verodigital.site${url}`;
            },
            bigClass(idx) {
                return idx === 0 || idx === 5;
            },
        },
        computed: {
            title() {
                return this.$route.path === '/project'
                    ? 'projects'
                    : 'featured projects';
            },
            checkProjectPage() {
                return this.$route.path === '/project';
            },
            contentBlockClasses() {
                return [
                    'content-block',
                    'main-content-margin-left-right',
                    {'content-block-project-page-margin-top': this.checkProjectPage},
                    {'content-block-project-page-margin-bottom': this.checkProjectPage},
                ];
            },
        },
    };
</script>

<style lang="scss">
  .projects-block {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 210px;

    .description {
      display: flex;
      flex-direction: column;
      margin-right: var(--main-mini-margin);

      .description-title {
        margin-top: 83px;
        margin-bottom: 35px;

        br {
          display: none;
          @media (max-width: 1440px) {
            display: block;
          }
        }
      }

      .content-p {
        white-space: pre-line;
      }
    }

    .content-block {
      margin-top: 82px;
      margin-bottom: 50px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .content-img-wrap {
        position: relative;
        width: calc((100% - var(--main-very-mini-margin)) / 2);
        height: 840px;
        margin-bottom: var(--main-very-mini-margin);
        display: flex;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        & .image-scale-block_wrap .image-scale-img {
          cursor: pointer;
        }

        .item-project-title {
          position: absolute;
          bottom: 60px;
          left: 60px;
          cursor: pointer;
          display: flex;
          flex-direction: column;

          .item-project-title-text {
            font-family: SFProDisplay;
          }

          .item-project-title-text-2, .item-project-title-text {
            cursor: pointer;
          }
        }
      }

      .content-img-wrap-big {
        width: 100%;
        margin-bottom: 100px;
        margin-top: 40px;

        & > div {
          width: inherit;
        }

        img {
          width: 100%;
        }
      }
    }

    .content-block-project-page-margin-top {
      margin-top: 42px;
    }

    .content-block-project-page-margin-bottom {
      margin-bottom: 2px;
    }

    .project_btn_wrap {
      width: max-content;
      height: max-content;
      margin-right: var(--main-big-margin);
      align-self: flex-end;
    }
  }

  .projects-block_projects-page {
    margin-bottom: 100px;
  }

  @media screen and (max-width: 1280px) {
    .projects-block {
      .description {
        .description-title {
          flex-direction: column;
          margin-bottom: 19px;
          white-space: unset;
        }
      }

      .content-block {
        margin-bottom: 0;

        .content-img-wrap {
          height: 620px;
        }

        .content-img-wrap-big {
          width: 100%;
          margin-bottom: 100px;
          margin-top: 60px;
        }
      }
    }
    .content-block-project-page-margin-top {
      margin-top: 40px !important;
    }
    .projects-block_projects-page {
      margin-bottom: 60px;
    }
  }

  @media screen and (max-width: 1024px) {
    .projects-block {
      margin-bottom: 111px;

      .description {
        .description-title {
          margin-bottom: 40px;
        }
      }

      .content-block {
        margin-top: 57px;

        .content-img-wrap {
          height: 560px;
        }

        .content-img-wrap-big {
          width: 100%;
          margin-bottom: 100px;
          margin-top: 60px;
          height: 526px;
        }
      }

      .content-block-project-page-margin-top {
        margin-top: 40px !important;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .projects-block {
      margin-bottom: 84px;

      .description {
        .description-title {
          margin-top: 50px;
        }
      }

      .content-block {
        margin-top: 124px;

        .content-img-wrap {
          height: 440px;

          .item-project-title {
            bottom: 30px;
            left: 48px;
          }
        }

        .content-img-wrap-big {
          width: 100%;
          margin-bottom: 50px;
          margin-top: 50px;
        }
      }

      .content-block-project-page-margin-top {
        margin-top: 0 !important;
      }
    }
  }

  @media screen and (max-width: 428px) {
    .projects-block {
      margin-bottom: 131px;

      .description {
        .description-title {
          margin-top: 82px;
          margin-bottom: 30px;
        }
      }

      .content-block {
        margin-top: 30px !important;
        margin-left: 0;
        margin-right: 0;

        .content-img-wrap {
          width: 100%;
          margin-bottom: 50px;
          height: 470px;

          .item-project-title {
            bottom: 60px;
            left: 60px;
            width: unset;
          }
        }

        .content-img-wrap-big {
          width: 100%;
          margin-bottom: 50px;
          margin-top: 0;
        }
      }

      .project_btn_wrap {
        align-self: flex-start;
        margin-right: 0;
        margin-left: var(--main-big-margin);
      }
    }
  }
</style>
