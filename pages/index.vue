<template>
  <div class="app">
    <div class="header-wrap">
      <Header/>
    </div>

    <transition name="nav-menu-fade" appear>
      <Nav_Menu_Modal v-if="MODAL_IS_ACTIVE"/>
    </transition>

    <Main_page/>
  </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import Main_page from "./Main_page";
    import Header from "../components/shared/Header";
    import Nav_Menu_Modal from "../components/Nav_Menu_Modal";

    export default {
        name: 'App',
        components: {Main_page, Header, Nav_Menu_Modal},
        data() {
            return {
                xCursor: 0,
                yCursor: 0,
            }
        },
        computed: {
            ...mapGetters('app', ['MODAL_IS_ACTIVE'])
        },
        methods: {
            ...mapActions('app', ['setCursorValue']),
        },

        mounted() {
            window.addEventListener("mousemove", (e) => {
                this.xCursor = e.pageX, this.yCursor = e.pageY, this.setCursorValue([this.xCursor, this.yCursor])
            });
            // window.addEventListener("scroll", (e)=>{ this.xCursor = e.pageX,this.yCursor = e.pageY, this.setCursorValue([this.xCursor, this.yCursor])});
        },

        beforeDestroy() {
            window.removeEventListener("mousemove", (e) => {
                this.xCursor = e.pageX, this.yCursor = e.pageY, this.setCursorValue([this.xCursor, this.yCursor])
            });
            // window.removeEventListener("scroll", (e)=>{ this.xCursor = e.pageX,this.yCursor = e.pageY, this.setCursorValue([this.xCursor, this.yCursor])});
        }
    }
</script>

<style lang="scss">
  .app {
    position: relative;
    width: 100%;
    height: 100%;

    .nav-menu-fade-enter, .nav-menu-fade-leave-to {
      transform: scale(0);
    }

    .nav-menu-fade-enter-active, .nav-menu-fade-leave-active {
      transition: transform 1s;
    }

    .header-wrap {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      align-items: center;
      z-index: 850;
    }
  }

</style>
