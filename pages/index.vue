<template>
  <div class="app">
    <Main_page/>
  </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import Main_page from "./Main_page";

    export default {
        name: 'App',
        components: {Main_page},
        data() {
            return {
                xCursor: 0,
                yCursor: 0,
            }
        },
        methods: {
            ...mapActions('app', ['setCursorValue']),
        },

        mounted() {
            window.addEventListener("mousemove",  (e)=>{ this.xCursor = e.pageX,this.yCursor = e.pageY, this.setCursorValue([this.xCursor, this.yCursor])});
            // window.addEventListener("scroll", (e)=>{ this.xCursor = e.pageX,this.yCursor = e.pageY, this.setCursorValue([this.xCursor, this.yCursor])});
        },

        beforeDestroy() {
            window.removeEventListener("mousemove", (e)=>{ this.xCursor = e.pageX,this.yCursor = e.pageY, this.setCursorValue([this.xCursor, this.yCursor])});
            // window.removeEventListener("scroll", (e)=>{ this.xCursor = e.pageX,this.yCursor = e.pageY, this.setCursorValue([this.xCursor, this.yCursor])});
        }
    }
</script>

<style lang="scss">
  .app {
    position: relative;
    width: 100%;
    height: 100%;
  }

</style>
