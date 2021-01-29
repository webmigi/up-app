<template>
  <div class="news-block"
       @mouseover="setGalleryCursorActive(true)"
       @mouseout="setGalleryCursorActive(false)">
    <span class="main-page__content-title-position block-title title">news</span>
    <Gallery :data="galleryData"/>
  </div>
</template>

<script>
    import {mapActions} from 'vuex'

    import Gallery from "../shared/Gallery/Gallery";

    import galleryImg1 from "@/static/images/Main-page/News/News1.jpg"
    import galleryImg2 from "@/static/images/Main-page/News/News2.jpg"
    import galleryImg3 from "@/static/images/Main-page/News/News3.jpg"
    import galleryImg4 from "@/static/images/Main-page/News/News4.jpg"
    import galleryImg5 from "@/static/images/Main-page/News/News5.jpg"
    import galleryImg6 from "@/static/images/Main-page/News/News6.jpg"
    import galleryImg7 from "@/static/images/Main-page/News/News7.jpg"
    import galleryImg8 from "@/static/images/Main-page/News/News8.jpg"

    export default {
        name: 'News',
        components: {
            Gallery
        },
        data() {
            return {
                galleryData: [
                    {img: galleryImg1, title: 'We work with an open mind', date: '11.04.2020'},
                    {img: galleryImg2, title: 'We work with an open mind', date: '11.04.2020'},
                    {img: galleryImg3, title: 'We work with an open mind', date: '11.04.2020'},
                    {img: galleryImg4, title: 'We work with an open mind', date: '11.04.2020'},
                    {img: galleryImg5, title: 'We work with an open mind', date: '11.04.2020'},
                    {img: galleryImg6, title: 'We work with an open mind', date: '11.04.2020'},
                    {img: galleryImg7, title: 'We work with an open mind', date: '11.04.2020'},
                    {img: galleryImg8, title: 'We work with an open mind', date: '11.04.2020'}
                ]
            }
        },
        methods: {
            ...mapActions('app', ['setGalleryCursorActive']),
        },
    }
</script>

<style lang="scss" scoped>
  .news-block {
    position: relative;
    display: flex;
    flex-direction: column;
    background: #E8E8E8;
    padding-bottom: 103px;
    cursor: none;

    .title {
      margin-bottom: 102px;
      margin-top: 78px;
    }
  }
</style>
