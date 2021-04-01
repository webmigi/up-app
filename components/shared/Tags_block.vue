<template>


  <div class="description-block">
    <div class="description-text-wrap">
      <p class="content-p pages-content-margin-left-big">{{ mainText }}</p>
    </div>

    <div class="project-values-wrap">
      <div class="values-block">
        <div
          :class="['value', { group: idx === 1 || idx === 2 }, {'value-none': !item.title}]"
          v-for="(item, idx) in tags">
          <span class="text-very-small">{{ item.title }}</span>
          <span class="item-project_description_value">{{
              item.description
            }}</span>
        </div>

        <div class="value" v-if="APP_WINDOW_SIZE.width > 500  && $route.name!=='news-lists-id'">
            <span class="item-project_pres-view"
                  @click="setModalImgIsActive">presentation view</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'Tags_block',
  props:{
    mainText: String,
    tags: Array
  },
  computed: {
    ...mapGetters('app', ['APP_WINDOW_SIZE']),
  },
  methods: {
    ...mapActions('app', ['setModalImgIsActive'])
  }
}
</script>

<style lang="scss" scoped>

.description-block {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 133px;
  padding-bottom: 47px;
  background-color: #fff;

  .description-text-wrap {
    display: flex;
    flex-direction: column;
    width: calc((100% - var(--main-very-mini-margin)) / 2);

    .content-p {
      white-space: pre-line;
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
      .value-none{
        display: none;
      }
    }
  }
}

@media screen and (max-width: 1280px) {
    .description-block {
      padding-top: 103px;
      padding-bottom: 67px;
    }
}

@media screen and (max-width: 1024px) {
  .item-project {
    .description-block {
      padding-bottom: 117px;
    }
  }
}

@media screen and (max-width: 768px) {
  .item-project {
    .description-block {
      padding-top: 53px;
      padding-bottom: 53px;
    }
  }
}


@media screen and (max-width: 428px) {
  .item-project {
    .description-block {
      padding-top: 103px;
      flex-direction: column;
      padding-bottom: 179px;

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
