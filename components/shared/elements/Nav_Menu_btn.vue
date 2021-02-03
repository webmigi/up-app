<template>
  <nuxt-link :to="`#${href}`" >
    <button class="nav-menu-btn-text nav-menu-btn">
      {{title}}
    </button>
  </nuxt-link>
</template>

<script>
    export default {
        name: "Content-btn",
        props: {
            title: String,
            href: String
        }
    }
</script>

<style lang="scss" scoped>
  .nav-menu-btn {
    position: relative;
    width: 100%;
    height: 100%;

    &:after {
      content: '';
      position: absolute;
      top: 100%;
      left: 0;
      width: 0;
      height: 8px;
      background-color: #000000;
      transition: width 0.3s;
    }

    &:hover:after {
      width: 100%;
    }
  }
</style>
