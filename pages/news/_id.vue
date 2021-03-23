<template>
  <div class="item-news">
    <div class="title-img-wrap">
      <scroll-animation :opacity="false" cover>
        <img :src="getUrl(news.background_image.url)" alt="" />
      </scroll-animation>
    </div>
    <div class="content">
      <span class="date-text">{{ getDate(news.published_at) }}</span>
      <span class="item-project-title-text">{{ news.title }}</span>
      <template v-for="(item, key) in news.news_content">
        <p class="content-p" v-if="item['__component'] === 'news-content.text'">
          {{ item.text }}
        </p>

        <div
          class="news-img-wrap"
          v-if="item['__component'] === 'news-content.image'"
        >
          <scroll-animation :opacity="false" cover>
            <img :src="getUrl(item.image.url)" alt="" />
          </scroll-animation>
        </div>
      </template>
    </div>
    <div class="paginator-wrap">
      <div class="paginator">
        <div class="arrow-wrap">
          <nuxt-link
            :to="`/news/${news.id === 1 ? count : news.id - 1}`"
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
            :to="`/news/${news.id === count ? 1 : news.id + 1}`"
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
    </div>
  </div>
</template>

<script>
  import ScrollAnimation from '../../components/ScrollAnimation';
  import Arrow_Btn from '../../components/shared/elements/Arrow_Btn';
  import axiosOption from '~/services/axios';

  export default {
    name: 'Item_News',
    components: { ScrollAnimation, Arrow_Btn },
    async asyncData({ error, params }) {
      try {
        const news = await axiosOption.getPage('news-lists/' + params.id);
        const count = await axiosOption.getPage('news-lists/count');
        return { news: news.data, count: count.data };
      } catch (e) {
        error({
          statusCode: 503,
          message: 'Unable to fetch blogs at this time',
        });
      }
    },
    data() {
      return {
        news: {},
        count: {},
      };
    },
    methods: {
      getUrl(url) {
        return `https://strapi-up.verodigital.site${url}`;
      },
      getDate(date) {
        let y = new Date(date).getFullYear(),
          m = ('0' + (new Date(date).getMonth() + 1)).slice(-2),
          d = ('0' + new Date(date).getDate()).slice(-2);
        return `${d}.${m}.${y}`;
      },
    },
  };
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
      transition: height 0.3s;
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
    .paginator-wrap {
      align-self: center;
      margin-top: 157px;
    }
  }

  @media screen and (max-width: 1024px) {
    .item-news {
      .title-img-wrap {
        height: 520px;
      }
      .content {
        .date-text {
          margin-top: 60px;
        }

        .item-project-title-text {
          margin-bottom: 64px;
        }
        .news-img-wrap {
          height: 440px;
          margin: 117px 0 100px 0;
        }
      }
      .paginator-wrap {
        margin-top: 160px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .item-news {
      .title-img-wrap {
        height: 546px;
      }
      .content {
        .date-text {
          margin-top: 40px;
        }

        .item-project-title-text {
          margin-bottom: 43px;
        }
        .news-img-wrap {
          margin: 41px 0 41px 0;
        }
      }
      .paginator-wrap {
        margin-top: 90px;
      }
    }
  }
  @media screen and (max-width: 414px) {
    .item-news {
      .title-img-wrap {
        height: 420px;
      }
      .content {
        .date-text {
          margin-top: 60px;
        }

        .item-project-title-text {
          margin-bottom: 33px;
        }
        .news-img-wrap {
          margin: 30px 0 30px 0;
        }
      }
      .paginator-wrap {
        margin-top: 100px;
      }
    }
  }
</style>
