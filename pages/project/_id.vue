<template>
  <div class="item-project">
    <transition name="nav-menu-fade" appear>
      <Img_Modal v-if="MODAL_IMG_IS_ACTIVE"
                 :images="project.presentation"/>
    </transition>
    <div class="title-img-wrap">
      <div class="project-title">
        <span class="main-page_start-text">{{ project.title }}</span>
        <span class="main-page_small-text">{{ project.title_card }}</span>
      </div>
      <scroll-animation :opacity="false" cover>
        <img :src="getUrl(project.background_image.url)" alt=""/>
      </scroll-animation>
    </div>


    <Tags_block :mainText="project.description"
                :tags="project.tags.tag"
                presView="true"/>

    <Item_Project_Content
      v-for="(item, index) in project.project_content"
      :key="index"
      :project="item"
    />

    <div class="paginator-wrap">
      <Paginator :page="'/project'"
                 :elIndex="elIndex"
                 :elsArr="projectArr"/>
    </div>

    <News/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

import Img_Modal from "~/components/Img_Modal";
import Paginator from "~/components/shared/elements/Paginator";
import Tags_block from "~/components/shared/Tags_block";
import News from '../../components/shared/News';
import Item_Project_Content from '../../components/Item_Project/Item_Project_Content';
import Arrow_Btn from '../../components/shared/elements/Arrow_Btn';
import axiosOption from '~/services/axios';

export default {
  name: 'single-project',
  components: {
    Img_Modal,
    News,
    Item_Project_Content,
    Arrow_Btn,
    Tags_block,
    Paginator
  },
  async asyncData({error, params}) {
    try {
      const project = await axiosOption.getPage(
        'projects-lists/' + params.id,
      );
      const projectArr = await axiosOption.getPage('projects-lists');
      return {project: project.data, projectArr: projectArr.data};
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
    };
  },
  methods: {
    getUrl(url) {
      return `https://strapi-up.verodigital.site${url}`;
    },
  },
  computed: {
    ...mapGetters('app', ['MODAL_IMG_IS_ACTIVE']),

    elIndex() {
      return this.projectArr.map(el => el.id).indexOf(this.project.id)
    },
  },
};
</script>

<style lang="scss" scoped>
.item-project {
  width: 100%;
  display: flex;
  flex-direction: column;

  .nav-menu-fade-enter,
  .nav-menu-fade-leave-to {
    opacity: 0;
    transform: scale(0);
  }

  .nav-menu-fade-enter-active,
  .nav-menu-fade-leave-active {
    transition: transform 1s, opacity 1s;
  }

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
      display: flex;
      flex-direction: column;
      z-index: 1;
    }
  }

  .paginator-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 180px;
    background-color: #fff;

    .paginator{
      align-self: center;
      width: 150px;
    }
  }
}

@media screen and (max-width: 1280px) {
  .item-project {
    .paginator-wrap {
      padding-bottom: 100px !important;
    }
  }
}
</style>
