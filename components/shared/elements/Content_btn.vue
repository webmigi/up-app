<template>
  <button :class="['content-btn-text', 'content-btn', {'content-btn-jobs': place === 'jobs'}]">
    {{title}}
  </button>
</template>

<script>
    export default {
        name: "Content-btn",
        props: ['title', 'place']
    }
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
      width: 50%;
      height: 4px;
      background-color: #000000;
      transition: width 0.3s;
    }

    &:hover:after {
      width: 100%;
    }
  }

  @media screen and (max-width: 428px){
    .content-btn-jobs{
      font-size: 14px;
    }
  }
</style>
