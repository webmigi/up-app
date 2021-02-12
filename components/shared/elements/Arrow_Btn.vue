<template>
  <div class="arrow-wrap">
    <button class="btn-left"
    :style="'width: '+btnWidth+'px'">
      <svg viewBox="0 0 67 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path :class="[{'imgModalFill': place==='imgModal'}, {'projectFill': place==='project'}]" d="M0 12L20 23.547V0.452994L0 12ZM18 14H66.5V10H18V14Z"/>
      </svg>
    </button>
    <button class="btn-right"
            :style="'width: '+btnWidth+'px'">
      <svg viewBox="0 0 67 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path :class="[{'imgModalFill': place==='imgModal'}, {'projectFill': place==='project'}]" d="M66.5 12L46.5 0.452996L46.5 23.547L66.5 12ZM48.5 10L-1.74846e-07 10L1.74846e-07 14L48.5 14L48.5 10Z"/>
      </svg>
    </button>
  </div>
</template>

<script>
  export default {
      name: 'Arrow_Btn',
      props:{
          btnWidth: Number,
          place: {
              validator: function (value) {
                  return ['imgModal', 'project']
              }

          }
      }
  }
</script>

<style lang="scss" scoped>
  .arrow-wrap{
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    .btn-left, .btn-right {
      height: 100%;
      transform: translateX(0);
      transition: transform 0.3s;

      svg {
        width: 100%;
        height: 100%;

        .imgModalFill{
          fill: white;
        }
        .projectFill{
          fill: black;
        }
      }
    }

    .btn-left {
      &:hover {
        transform: translateX(-50%);
      }
    }

    .btn-right {
      &:hover {
        transform: translateX(50%);
      }
    }
  }
</style>
