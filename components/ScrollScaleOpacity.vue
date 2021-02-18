<template>
  <div ref="wrapper" class="scale-wrapper">
    <client-only>
      <intersect @enter="start = true" @leave="start = false">
        <div
          class="scale-content"
          :style="'transform: scale('+scaleValue+'); opacity: '+opacityValue+';}'"
        >
          <slot></slot>
          </div>
        </intersect>
    </client-only>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ScrollScaleOpacity",

  props: {
    opacity: {
      type: [Object, Boolean],
      required: false,
      default: () => {
        return {
          offset: 0
        }
      }
    },
    scale: {
      type: [Object, Boolean],
      required: false,
      default: () => {
        return {
          start: 1,
          end: 1.2,
          offset: 0
        }
      }
    },
  },
  data() {
    return {
      start: false,
      scaleValue: 1,
      opacityValue: 1
    }
  },

  watch: {
    APP_SCROLL_VALUE: function () {
      this.getPercent()
      // this.scaleValue = this.start ? this.getScale() : this.scale.start
      // this.opacityValue = this.start ? this.getOpacity() : this.opacity.start
    },
  },

  methods: {
    getOpacity() {
      return 1 - this.getPercent(opacity)
    },

    getScale() {
      return 1 + (0.2 -  this.getPercent() / 1000)
    },

    getPercent() {
      let size = this.$refs.wrapper.getBoundingClientRect()


      // if(opacity) {
      //   inaccurate = (this.APP_WINDOW_SIZE.height - size.bottom) / -size.height * 100
      //   if (inaccurate > 100) return 100
      //   else if (inaccurate < 0) return 0
      //   else return +inaccurate.toFixed(0)
      //
      // } else {
      //   inaccurate = (size.top + size.height) / (this.APP_WINDOW_SIZE.height + size.height) * 200
      //   if (inaccurate > 200) return 200
      //   else if (inaccurate < 0) return 0
      //   else return +inaccurate.toFixed(0)
      // }
    },
  },

  computed: {
    ...mapGetters("app", ["APP_SCROLL_VALUE", "APP_WINDOW_SIZE"]),
  }
}
</script>

<style scoped>
.scale-wrapper {
  overflow: hidden;
}
</style>

