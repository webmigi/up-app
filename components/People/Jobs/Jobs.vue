<template>
  <div class="jobs">
    <span class="main-page__content-title-position block-title">careers</span>
    <span class="content-title">{{ data.title }}</span>
    <Item_vacancy
      v-for="(vacancy, index) in data.questions"
      :key="index"
      :vacancy="vacancy"
      @clicked="$emit('clicked')"
    />
  </div>
</template>

<script>
  import Item_vacancy from './Item_vacancy';

  export default {
    name: 'Jobs',
    components: { Item_vacancy },
    props: {
      data: {
        type: Object,
        default: {},
      },
    },
    data() {
      return {};
    },
  };
</script>

<style lang="scss" scoped>
  .jobs {
    display: flex;
    flex-direction: column;
    margin-top: 218px;
    margin-left: var(--main-big-margin);
    margin-right: var(--main-mini-margin);

    .main-page__content-title-position {
      margin-left: 0;
      margin-top: 0;
      margin-bottom: 83px;
    }
  }

  @media screen and (max-width: 1280px) {
    .jobs {
      margin-top: 120px;
    }
  }
  @media screen and (max-width: 1024px) {
    .jobs {
      margin-top: 97px;
      .content-title {
        margin-bottom: 69px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .jobs {
      margin-top: 104px;
    }
  }
</style>
