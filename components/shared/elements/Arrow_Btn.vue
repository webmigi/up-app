<template>
  <div class="arrow-wrap">
    <button class="btn-left">
      <svg viewBox="0 0 67 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          :class="[
            { imgModalFill: place === 'imgModal' },
            { projectFill: place === 'project' },
          ]"
          d="M0 12L20 23.547V0.452994L0 12ZM18 14H66.5V10H18V14Z"
        />
      </svg>
    </button>
    <button class="btn-right">
      <svg viewBox="0 0 67 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          :class="[
            { imgModalFill: place === 'imgModal' },
            { projectFill: place === 'project' },
          ]"
          d="M66.5 12L46.5 0.452996L46.5 23.547L66.5 12ZM48.5 10L-1.74846e-07 10L1.74846e-07 14L48.5 14L48.5 10Z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'Arrow_Btn',
    props: {
      place: {
        validator: function(value) {
          return ['imgModal', 'project'];
        },
      },
    },
  };
</script>

<style lang="scss">
  .arrow-wrap {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;

    .btn-left,
    .btn-right {
      min-width: 100px;
      cursor: pointer;
      svg {
        transform: translateX(0);
        transition: transform 0.3s;
        width: 60px;
        mxa-height: 100%;

        .imgModalFill {
          fill: white;
        }
        .projectFill {
          fill: black;
        }
      }
    }

    .btn-left {
      text-align: right;
      margin-right: 30px;
      // &:hover {
      //   svg {
      //     transform: translateX(-50%);
      //   }
      // }
    }

    .btn-right {
      text-align: left;
      margin-left: 30px;
      // &:hover {
      //   svg {
      //     transform: translateX(50%);
      //   }
      // }
    }
  }
</style>
