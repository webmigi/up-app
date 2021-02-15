<template>
  <div class="img-modal">
    <div class="content">
      <div class="btn-span">
        <button @click="setModalImgIsActive">
          <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L32 32M32 2L2 32" stroke="white" stroke-width="4"/>
          </svg>
        </button>
        <button>
          <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 0.786804V43.2132M43.2132 22H0.786797" stroke="white" stroke-width="4"/>
          </svg>
        </button>
      </div>
      <div class="image-list">
        <img class="img-span" src="../static/images/Item_Project/contentImg1.jpg"/>
      </div>
      <div class="paginator">
        <Arrow_Btn :btn-width=80 :place="'imgModal'"/>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import Arrow_Btn from "./shared/elements/Arrow_Btn";

    export default {
        name: 'Img_Modal',
        components: {Arrow_Btn},
        methods: {
            ...mapActions('app', ['setModalImgIsActive'])
        }
    }
</script>

<style lang="scss" scoped>
  .img-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--winHeight);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1000;

    .content {
      width: 80%;
      position: relative;
      .image-list {
        height: calc(var(--winHeight) - 230px);
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
        }
      }
      .btn-span {
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        transform: translateY(-100%);
        button {
          width: 60px;
          height: 60px;
          padding: 15px;
        }
      }

      .paginator {
        display: flex;
        padding: 0 20px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        transform: translateY(calc(100% + 30px));
      }
      .paginator >>> .arrow-wrap {
        width: 100%;
      }
    }
  }
</style>
