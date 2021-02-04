<template>
  <div class="app">
    <div class="main-page">
      <Title_imgs/>
      <div class="main-page_content-wrap">
        <div class="main-page_content">
          <Studio/>
          <Projects/>
          <News/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import Title_imgs from "../components/Main-page/Title_imgs/Title_imgs";
    import Studio from "../components/Main-page/Studio";
    import Projects from "../components/Main-page/Projects";
    import News from "../components/Main-page/News";


    export default {
        name: 'App',
        components: {Title_imgs, Studio, Projects, News},
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
    .main-page {
      width: 100%;
      display: flex;
      flex-direction: column;

      .main-page_content-wrap {
        width: 100%;
        background-color: #FFFFFF;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 800;

        .main-page_content {
          width: 100%;
          max-width: 1920px;
          display: flex;
          flex-direction: column;
          background-color: #FFFFFF;
        }
      }
    }
  }

</style>
