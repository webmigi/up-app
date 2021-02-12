<template>
  <nuxt-link :to="`${href}`">
    <button class="nav-menu-btn-text nav-menu-btn"  @click="setModalIsActive">
      {{title}}
    </button>
  </nuxt-link>
</template>

<script>
  import {mapActions} from 'vuex'

    export default {
        name: "Content-btn",
        props: {
            title: String,
            href: String
        },
        methods:{
            ...mapActions('app', ['setModalIsActive'])
        }
    }
</script>

<style lang="scss" scoped>
  .nav-menu-btn {
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
      height: 8px;
      background-color: #000000;
      transition: width 1s;
    }

    &:hover:after {
      width: 100%;
    }
  }
</style>
