<template>
  <div>
    <Nuxt/>
  </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        created() {
            this.$nextTick(() => {
                if (process.client) {
                    window.addEventListener("scroll", () => this.windowScrollSet());
                    window.addEventListener("resize", () => this.setWindowSizeAction());
                    window.addEventListener("orientationchange", () => this.setWindowSizeAction());
                    this.windowScrollSet();
                    this.setWindowSizeAction();
                }
            });
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
  }

</style>
