<template>
  <div>
    <div class="header-wrap">
      <Header/>
    </div>
    <transition name="nav-menu-fade" appear>
      <Nav_Menu_Modal v-if="MODAL_IS_ACTIVE"/>
    </transition>
    <Nuxt/>
  </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import Header from "../components/shared/Header";

    export default {
        data() {
            return {
                xCursor: 0,
                yCursor: 0,
            }
        },
        components: {Header},
        created() {
            if (process.client) {
                window.addEventListener("scroll", () => this.windowScrollSet());
                window.addEventListener("resize", () => this.setWindowSizeAction());
                window.addEventListener("orientationchange", () => this.setWindowSizeAction());
                this.windowScrollSet();
                this.setWindowSizeAction();
            }
        },
        computed: {
            ...mapGetters('app', ['MODAL_IS_ACTIVE'])
        },
        methods: {
            ...mapActions('app', ['updateScrollValue', 'setWindowSize']),

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
        }
    }
</script>
<style>
  html {
    font-family: 'Source Sans Pro';
    width: 100vw;
    min-height: 100vh;
    height: max-content;
    overflow-x: hidden;
    overflow-Y: scroll;
    --winHeight: 100vh;
    --winWidth: 100vw;
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

  .nav-menu-fade-enter, .nav-menu-fade-leave-to {
    transform: scale(0);
  }

  .nav-menu-fade-enter-active, .nav-menu-fade-leave-active {
    transition: transform 1s;
  }
</style>
