<template>
  <div ref="wrapper" :class="['scale-wrapper', { cover: cover }]">
    <client-only>
      <intersect @enter="start = true" @leave="start = false">
        <div
          class="scale-content"
          :style="`transform: scale(${scaleValue}) translateY(${translateYValue}px); opacity: ${opacityValue};}`">
          <slot></slot>
        </div>
      </intersect>
    </client-only>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'ScrollAnimation',

  props: {
    place: String,
    cover: {
      type: Boolean,
    },
    offset: {
      type: Number,
      default: 0, // %
    },
    opacity: {
      type: [Object, Boolean],
      required: false,
      default: () => {
        return {
          start: 0, // %
          end: 100, // %
        };
      },
    },
    scale: {
      type: [Object, Boolean],
      required: false,
      default: () => {
        return {
          start: 100, // %
          end: 120, // %
        };
      },
    },
    translateY: {
      type: [Object, Boolean],
      required: false,
      default: () => {
        return {
          start: 0, // %
          end: 100, // %
        };
      },
    },
    translate: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      start: false,
      scaleValue: 1,
      opacityValue: 1,
      translateYValue: 0,
    };
  },

  watch: {
    APP_SCROLL_VALUE: function () {
      if (this.start) {
        this.opacityValue = this.getOpacity();

        this.scaleValue = this.scaleValue > this.getScale() ?
          this.scaleValue
          :
          this.getScale();

        this.translateYValue = this.translate ?
          (
            (this.translateYValue > 0) && (this.translateYValue < this.getTranslateY()) ?
              this.translateYValue
              :
              this.getTranslateY()
          )
          :
          0;
      }
    },
  },

  methods: {
    getOpacity() {
      return +(
        this.getPercent(this.opacity.start, this.opacity.end) / 100
      ).toFixed(2);
    },

    getScale() {
      return +(
        this.getPercent(this.scale.start, this.scale.end, 'windowHeight') /
        100
      ).toFixed(3);
    },

    getTranslateY() {
      let result = 0;
      let full = +this.getPercent(
        this.translateY.start,
        this.translateY.end,
      ).toFixed(3);

      if (full < 50) {
        result = (full / 50) * 150;
      } else if (full > 50) {
        result = 150;
      } else {
        result = 0;
      }

      return 150 - result;
    },

    getPercent(start, end, type, offset = 0) {
      let size = this.$refs.wrapper.getBoundingClientRect(),
        a =
          type === 'windowHeight'
            ? size.height + this.APP_WINDOW_SIZE.height
            : size.height,
        b =
          type === 'windowHeight'
            ? size.top + size.height
            : size.bottom - this.APP_WINDOW_SIZE.height,
        offset2 = a * (offset / 100),
        percent =
          end +
          start -
          (b * (start - end) - (a - offset2) * start) / -(a - offset2); // ~ 0 - 100 ~

      return (percent =
        percent > end
          ? (percent = end)
          : percent < start
          ? (percent = start)
          : percent); //set boundaries from 0 to 100
    },
  },

  computed: {
    ...mapGetters('app', ['APP_SCROLL_VALUE', 'APP_WINDOW_SIZE']),
  },
};
</script>

<style lang="scss">
.scale-wrapper {
  overflow: hidden;
  height: 100%;

  &.cover {
    width: 100%;
    height: 100%;
  }
  .scale-content {
    width: 100%;
    height: 100%;

    img {
      //width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
