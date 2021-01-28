<template>
  <intersect @enter.once="(spanScaleStartScroll = APP_SCROLL_VALUE),(spanScaleStartScrollActive = true)">
    <img :src="img">
  </intersect>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Image_Scale_Block",
        props: ['img'],
        data() {
            return {
                startScroll: 0,
            }
        },
        computed: {
            ...mapGetters("app", ["APP_SCROLL_VALUE", "APP_WINDOW_SIZE"]),
        }
    }
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
    height: 100%;
  }
</style>
