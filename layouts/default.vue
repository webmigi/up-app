<template>
  <div>
    <div class="header-wrap">
      <Header/>
    </div>
    <transition name="nav-menu-fade" appear>
      <Img_Modal v-if="MODAL_IMG_IS_ACTIVE"/>
    </transition>
    <transition name="nav-menu-fade" appear>
      <Nav_Menu_Modal v-if="MODAL_IS_ACTIVE"/>
    </transition>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import Header from "../components/shared/Header";
    import Nav_Menu_Modal from "../components/Nav_Menu_Modal";
    import Footer from "../components/shared/Footer";
    import Img_Modal from "../components/Img_Modal";

    export default {
        data() {
            return {
                xCursor: 0,
                yCursor: 0,
            }
        },
        components: {Header, Nav_Menu_Modal, Footer, Img_Modal},
        created() {
            if (process.client) {
                window.addEventListener("scroll", () => this.windowScrollSet());
                window.addEventListener("resize", () => this.setWindowSizeAction());
                window.addEventListener("orientationchange", () => this.setWindowSizeAction());
                this.windowScrollSet();
                this.setWindowSizeAction();
            }
        },
        mounted() {
            window.addEventListener("mousemove", (e) => {
                this.xCursor = e.pageX, this.yCursor = e.pageY, this.setCursorValue([this.xCursor, this.yCursor])
            });
        },
        computed: {
            ...mapGetters('app', ['MODAL_IS_ACTIVE', 'APP_WINDOW_SIZE', 'MODAL_IMG_IS_ACTIVE']),

            headerWidth() {
                return this.APP_WINDOW_SIZE.width > 1920 ? ((this.APP_WINDOW_SIZE.width - 1920) / 2) : 0
            }
        },
        methods: {
            ...mapActions('app', ['updateScrollValue', 'setWindowSize', 'setCursorValue']),

            windowScrollSet() {
                this.updateScrollValue({
                    value: window.pageYOffset,
                });
            },
            setWindowSizeAction() {
                let windowSize = {
                    width: window.innerWidth,
                    height: window.innerHeight
                };
                document.documentElement.style.setProperty(
                    "--winWidth",
                    `${windowSize.width}px`
                );
                document.documentElement.style.setProperty(
                    "--winHeight",
                    `${windowSize.height}px`
                );
                this.setWindowSize(windowSize)
            },
        },
        beforeDestroy() {
            window.removeEventListener("scroll", () => this.windowScrollSet());
            window.removeEventListener("resize", () => this.setWindowSizeAction());
            window.removeEventListener("orientationchange", () => this.setWindowSizeAction());
            window.removeEventListener("mousemove", (e) => {
                this.xCursor = e.pageX, this.yCursor = e.pageY, this.setCursorValue([this.xCursor, this.yCursor])
            });
        }
    }
</script>
<style>
  html {
    position: relative;
    display: flex;
    justify-content: center;
    font-family: 'Source Sans Pro';
    width: 100vw;
    min-height: 100vh;
    height: max-content;
    overflow-x: hidden;
    overflow-Y: scroll;
    --winHeight: 100vh;
    --winWidth: 100vw;
    --main-big-margin: 220px;
    --main-mini-margin: 120px;
    --main-very-mini-margin: 60px;
  }

  body {
    width: var(--winWidth);
    /*max-width: 1920px;*/
  }

  .header-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: var(--winWidth);
    display: flex;
    align-items: center;
    z-index: 1000;
  }

  .nav-menu-fade-enter, .nav-menu-fade-leave-to {
    opacity: 0;
    transform: scale(0);
  }

  .nav-menu-fade-enter-active, .nav-menu-fade-leave-active {
    transition: transform 1s, opacity 1s;
  }

  @media screen and (max-width: 1280px){
    html{
      --main-big-margin: 200px;
      --main-very-mini-margin: 40px;
    }
  }
  @media screen and (max-width: 1024px){
    html{
      --main-big-margin: 110px;
      --main-mini-margin: 40px;
      --main-very-mini-margin: 20px;
    }
  }
  @media screen and (max-width: 768px){
    html{
      --main-big-margin: 88px;
      --main-very-mini-margin: 16px;
    }
  }
  @media screen and (max-width: 428px){
    html{
      --main-big-margin: 72px;
      --main-mini-margin: 24px;
    }
  }
</style>
