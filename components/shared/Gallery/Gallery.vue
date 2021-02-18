<template>
  <div class="carousel-wrapper" id="spinnerBlock">
    <div class="slider" v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="slider-item swiper-slide d-project-item" v-for="(item, index) in data" :key="index">
          <Gallery_item
            :imgProps="item.img"
            :titleProps="item.title"
            :dateProps="item.date"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

    import Gallery_item from "./Gallery_item";
    import {mapActions} from "vuex";
    export default {
        name: "Gallery",
        props: ["data"],
        components: {Gallery_item},
        data() {
          return {
            swiperOption: {
              speed: 1000,
              loop: true,
              slidesPerView: 'auto',
              spaceBetween: 30,
              freeMode: true,
              grabCursor: true,
            }
          }
        },
    };
</script>

<style scoped>
  .carousel-wrapper {
    width: 100%;
    overflow: hidden;
    cursor: none
  }

  .img-wrapper {
    min-height: 300px;
    outline: 0;
  }

  .img-wrapper img {
    pointer-events: none;
  }

  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform,-webkit-transform;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
  }

  .swiper-slide {
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    height: 100%;
    position: relative;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform,-webkit-transform;
  }
</style>
