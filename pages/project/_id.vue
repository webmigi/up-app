<template>
  <div class="item-project">
    <div class="title-img-wrap">
      <span class="project-title main-page_start-text">{{
        project.title
      }}</span>
      <scroll-animation :opacity="false" cover>
        <img :src="getUrl(project.background_image.url)" alt="" />
      </scroll-animation>
    </div>
    <div class="description-block">
      <div class="description-text-wrap">
        <p class="content-p pages-content-margin-left-big">
          {{ project.description }}
        </p>
      </div>

      <div class="project-values-wrap">
        <div class="values-block">
          <div
            :class="['value', { group: idx === 1 || idx === 2 }]"
            v-for="(item, idx) in project.tags.tag"
          >
            <span class="text-very-small">{{ item.title }}</span>
            <span class="item-project_description_value">{{
              item.description
            }}</span>
          </div>

          <div class="value" v-if="APP_WINDOW_SIZE.width > 500">
            <span class="item-project_pres-view">presentation view</span>
          </div>
        </div>
      </div>
    </div>

    <Item_Project_Content
      v-for="(item, index) in project.project_content"
      :key="index"
      :project="item"
    />

    <div class="paginator">
      <div class="arrow-wrap">
        <nuxt-link
          :to="`/project/${project.id === 1 ? count : project.id - 1}`"
          class="btn-left"
        >
          <svg
            width="21"
            height="16"
            viewBox="0 0 21 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.292892 7.2929C-0.0976315 7.68342 -0.0976314 8.31658 0.292893 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928933C7.68054 0.538409 7.04738 0.538409 6.65685 0.928933L0.292892 7.2929ZM21 7L1 7L1 9L21 9L21 7Z"
              fill="#000"
            />
          </svg>
        </nuxt-link>
        <nuxt-link
          :to="`/news/${project.id === count ? 1 : project.id + 1}`"
          class="btn-right"
        >
          <svg
            width="21"
            height="16"
            viewBox="0 0 21 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.2929L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-8.74228e-08 9L20 9L20 7L8.74228e-08 7L-8.74228e-08 9Z"
              fill="#000"
            />
          </svg>
        </nuxt-link>
      </div>
    </div>
    <News />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import News from '../../components/shared/News';
  import Item_Project_Content from '../../components/Item_Project/Item_Project_Content';
  import Arrow_Btn from '../../components/shared/elements/Arrow_Btn';
  import axiosOption from '~/services/axios';

  export default {
    name: 'single-project',
    components: {
      News,
      Item_Project_Content,
      Arrow_Btn,
    },
    async asyncData({ error, params }) {
      try {
        const project = await axiosOption.getPage(
          'projects-lists/' + params.id,
        );
        const count = await axiosOption.getPage('projects-lists/count');
        return { project: project.data, count: count.data };
      } catch (e) {
        error({
          statusCode: 503,
          message: 'Unable to fetch blogs at this time',
        });
      }
    },
    data() {
      return {
        project: {},
        count: {},
      };
    },
    methods: {
      getUrl(url) {
        return `http://ovz13.dwynn-dev.me2jm.vps.myjino.ru${url}`;
      },
    },
    computed: {
      ...mapGetters('app', ['APP_WINDOW_SIZE']),
    },
  };
</script>

<style lang="scss" scoped>
  .item-project {
    width: 100%;
    display: flex;
    flex-direction: column;

    .title-img-wrap {
      position: relative;
      width: 100%;
      height: var(--winHeight);
      display: flex;
      align-items: center;
      transition: height 0.3s;

      .project-title {
        margin-right: var(--main-mini-margin);
        margin-left: var(--main-mini-margin);
        position: absolute;
        z-index: 1;
      }
    }

    .description-block {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 133px;
      margin-bottom: 47px;

      .description-text-wrap {
        display: flex;
        flex-direction: column;
        width: calc((100% - var(--main-very-mini-margin)) / 2);

        .content-p {
          white-space: pre-line;
        }
      }
    }

    .project-values-wrap {
      width: calc((100% - var(--main-very-mini-margin)) / 2);
      display: flex;
      flex-direction: column;

      .values-block {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .value {
          width: 100%;
          &.group {
            width: 50%;
          }
        }
      }
    }

    .paginator {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 180px;
    }
  }

  @media screen and (max-width: 1280px) {
    .item-project {
      .description-block {
        margin-top: 103px;
        margin-bottom: 67px;
      }
    }
    .paginator {
      margin-bottom: 100px !important;
    }
  }

  @media screen and (max-width: 1024px) {
    .item-project {
      .description-block {
        margin-bottom: 117px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .item-project {
      .description-block {
        margin-top: 53px;
        margin-bottom: 53px;
      }
    }
  }

  @media screen and (max-width: 428px) {
    .item-project {
      .description-block {
        margin-top: 103px;
        flex-direction: column;
        margin-bottom: 179px;

        .project-values-wrap {
          width: unset;
          order: 1;
          margin-left: var(--main-big-margin);
        }

        .description-text-wrap {
          width: unset;
          order: 2;

          .content-p {
            margin-right: var(--main-mini-margin);
          }
        }
      }
    }
  }
</style>
