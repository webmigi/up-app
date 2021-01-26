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
                    this.windowScrollSet();

                }
            });
        },
        methods: {
            ...mapActions('app', ['updateScrollValue']),

            windowScrollSet() {
                this.updateScrollValue({
                    value: window.pageYOffset,
                });
            }
        },
        beforeDestroy() {
            window.removeEventListener("scroll", () => this.windowScrollSet());
        },
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
