<template>
  <button
    :class="[
      'content-btn-text',
      'content-btn',
      { 'content-btn-jobs': place === 'jobs' },
      { 'start-bat-span': place === 'start-span' },
    ]"
  >
    {{ title }}
  </button>
</template>

<script>
  export default {
    name: 'Content-btn',
    props: ['title', 'place'],
    // computed:{
    //     currentHref(){
    //      return this.href !== undefined ? this.href : this.$route.path
    //     }
    // }
  };
</script>

<style lang="scss" scoped>
  .content-btn {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;

    &:after {
      content: '';
      position: absolute;
      top: 100%;
      left: 0;
      width: 0;
      height: 4px;
      background-color: #000000;
      transition: width 0.3s;
    }

    &:hover:after {
      width: 100%;
    }
  }

  @media screen and (max-width: 428px) {
    .content-btn-jobs {
      font-size: 14px;
    }
  }
</style>
