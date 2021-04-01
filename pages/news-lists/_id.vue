<template>
  <div class="item-news">
    <div class="title-img-wrap">
      <scroll-animation :opacity="false" cover>
        <img :src="getUrl(news.background_image.url)" alt=""/>
      </scroll-animation>
    </div>
    <div class="content">
      <span class="date-text">{{ getDate(news.published_at) }}</span>
      <span class="item-project-title-text">{{ news.title }}</span>


      <!--      <template v-for="(item, key) in news.news_content">-->
      <!--        <p class="content-p" v-if="item['__component'] === 'news-content.text'">-->
      <!--          {{ item.text }}-->
      <!--        </p>-->

      <!--        <div-->
      <!--          class="news-img-wrap"-->
      <!--          v-if="item['__component'] === 'news-content.image'"-->
      <!--        >-->
      <!--          <scroll-animation :opacity="false" cover>-->
      <!--            <img :src="getUrl(item.image.url)" alt="" />-->
      <!--          </scroll-animation>-->
      <!--        </div>-->
      <!--      </template>-->


    </div>
    <Tags_block :mainText="news.main_text"
                :tags="news.tags.tag"
                :presView="false"/>


    <div class="project-content">
      <div class="content-type-1">
        <div
          class="content-type-1_img-wrap item-project_img-wrap_height">
          <ScrollAnimation :opacity="false" cover v-if="news.news_image_block_1.image">
            <img :src="getUrl(news.news_image_block_1.image.url)" alt=""/>
          </ScrollAnimation>
        </div>
        <p
          v-if="news.news_image_block_1.description !== undefined"
          class="item-project_img-description_width
         item-project_img-description_margin-top
         content-p"
        >
          {{ news.news_image_block_1.description }}
        </p>
      </div>


      <div class="content-type-2">
        <div class="content-type-2_img-wrap item-project_img-wrap_height">
          <ScrollAnimation :opacity="false" cover v-if="news.news_image_block_2.image">
            <img :src="getUrl(news.news_image_block_2.image.url)" alt=""/>
          </ScrollAnimation>
        </div>
        <p
          v-if="news.news_image_block_2.description !== undefined"
          class="item-project_img-description_width
         item-project_img-description_margin-top
         content-p"
        >
          {{ news.news_image_block_2.description }}
        </p>
      </div>

    </div>

    <div class="paginator-wrap">
      <Paginator :page="'/news-lists'"
                 :elIndex="elIndex"
                 :elsArr="newsArr"/>
    </div>

  </div>
</template>

<script>
import Tags_block from "~/components/shared/Tags_block";
import ScrollAnimation from '../../components/ScrollAnimation';
import Arrow_Btn from '../../components/shared/elements/Arrow_Btn';
import Paginator from "~/components/shared/elements/Paginator";
import axiosOption from '~/services/axios';

export default {
  name: 'Item_News',
  components: {ScrollAnimation, Arrow_Btn, Tags_block, Paginator},
  async asyncData({error, params}) {
    try {
      const news = await axiosOption.getPage('news-lists/' + params.id);
      const newsArr = await axiosOption.getPage('news-lists');
      return {news: news.data, newsArr: newsArr.data};
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
    };
  },
  computed: {
    elIndex() {
      return this.newsArr.map(el => el.id).indexOf(this.news.id)
    }
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

    //.news-img-wrap {
    //  width: 100%;
    //  height: 660px;
    //  margin: 107px 0 100px 0;
    //}
  }


  .project-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    background-color: #fff;

    &.project-content-4 {
      background-color: transparent;
      position: relative;
      height: 100vh;
    }

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
  }


  .paginator-wrap {
    align-self: center;
    margin-top: 157px;
    width: 150px;
  }
}

@media screen and (max-width: 1280px) {
  .item-news {
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
    }
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

      //.news-img-wrap {
      //  height: 440px;
      //  margin: 117px 0 100px 0;
      //}
    }

    .project-content {
      .content-type-1 {
        margin-bottom: 90px;
      }

      .content-type-2 {
        width: 73%;
        margin-bottom: 90px;
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

      //.news-img-wrap {
      //  margin: 41px 0 41px 0;
      //}
    }

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
    }

    .paginator-wrap {
      margin-top: 90px;
    }
  }
}

@media screen and (max-width: 428px) {
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

      //.news-img-wrap {
      //  margin: 30px 0 30px 0;
      //}
    }

    .project-content {
      .content-type-1 {
        margin-bottom: 50px;
      }

      .content-type-2 {
        width: 100%;
        margin-bottom: 50px;

        .content-p {
          margin-left: var(--main-big-margin);
        }
      }
    }

    .paginator-wrap {
      margin-top: 100px;
    }
  }
}
</style>
