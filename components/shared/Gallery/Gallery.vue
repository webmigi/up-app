<template>
  <div class="carousel-wrapper" id="spinnerBlock">
    <client-only>
      <swiper class="swiper" :options="swiperOption" @ready="onSwiperRedied">
        <swiper-slide
          class="slider-item d-project-item"
          v-for="(item, index) in news"
          :key="index"
        >
          <Gallery_item
            :id="item.id"
            :img="item.background_image.url"
            :title="item.short_title"
            :date="item.published_at"
            :tags="item.tags_news"
          />
        </swiper-slide>
      </swiper>
    </client-only>
  </div>
</template>

<script>
  import Gallery_item from './Gallery_item';

  export default {
    name: 'Gallery',
    components: { Gallery_item },

    async fetch() {
      this.news = await fetch(
        'https://arch-admin.archimatika.agency/news-lists',
      ).then(res => res.json());
    },

    data() {
      return {
        news: {},
        swiperOption: {
          slidesPerView: 'auto',
          spaceBetween: 30,
          loop: true,
          loopedSlides: 5,
          freeMode: true,
          centeredSlides: true,
        },
      };
    },
    methods: {
      onSwiperRedied(swiper) {
        setTimeout(function() {
          swiper.slideReset();
        }, 500);
      },
    },
  };
</script>

<style scoped>
  .carousel-wrapper {
    width: 100%;
    overflow: hidden;
    cursor: none;
  }

  .img-wrapper {
    min-height: 300px;
    outline: 0;
  }

  .img-wrapper img {
    pointer-events: none;
  }

  .slider-item {
    width: auto;
  }
</style>
