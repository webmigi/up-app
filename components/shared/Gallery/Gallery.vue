<template>
  <div class="carousel-wrapper"
       id="spinnerBlock">
    <client-only>
      <VueSlickCarousel v-bind="slickOptions">
        <div v-for="(item, index) in data" :key="index" class="img-wrapper">
          <Gallery_item
            :imgProps="item.img"
            :titleProps="item.title"
            :dateProps="item.date"
          />
        </div>
      </VueSlickCarousel>
    </client-only>
  </div>
</template>
<script>

    import Gallery_item from "./Gallery_item";
    export default {
        name: "Gallery",
        props: ["data"],
        data() {
            return {
                slickOptions: {
                    edgeFriction: 0.01,
                    variableWidth: true,
                    arrows: false,
                }
            }
        },
        components: {Gallery_item},
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
</style>
