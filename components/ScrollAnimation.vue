<template>
  <div ref="wrapper" :class="['scale-wrapper', { cover: cover }]">
    <client-only>
      <intersect @enter="start = true" @leave="start = false">
        <div
          class="scale-content"
          :style="`transform: scale(${scaleValue}); opacity: ${opacityValue};}`"
        >
          <slot></slot>
        </div>
      </intersect>
    </client-only>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'ScrollAnimation',

    props: {
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
    },
    data() {
      return {
        start: false,
        scaleValue: 1,
        opacityValue: 1,
      };
    },

    watch: {
      APP_SCROLL_VALUE: function() {
        if (this.start) {
          this.opacityValue = this.getOpacity();
          this.scaleValue = this.getScale();
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

      getPercent(start, end, type) {
        let size = this.$refs.wrapper.getBoundingClientRect(),
          a =
            type === 'windowHeight'
              ? size.height + this.APP_WINDOW_SIZE.height
              : size.height,
          b =
            type === 'windowHeight'
              ? size.top + size.height
              : size.bottom - this.APP_WINDOW_SIZE.height,
          offset = a * (this.offset / 100),
          percent =
            end +
            start -
            (b * (start - end) - (a - offset) * start) / -(a - offset); // ~ 0 - 100 ~

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
    &.cover {
      width: 100%;
      height: 100%;
      .scale-content {
        width: 100%;
        height: 100%;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>
