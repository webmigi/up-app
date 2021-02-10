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
      <img class="img-span" src="../static/images/Item_Project/contentImg1.jpg"/>
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
    position: sticky;
    top: 0;
    left: 0;
    margin: auto;
    width: 100%;
    height: var(--winHeight);
    overflow: hidden;
    display: flex;
    flex-direction: column-reverse;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1000;

    .content {
      display: flex;
      flex-direction: column;
      height: 100%;
      margin: 60px var(--main-mini-margin);

      .btn-span {
        display: flex;
        justify-content: space-between;

        button {
          width: 60px;
          height: 60px;
          padding: 15px;
        }
      }

      .img-span {
        height: calc(100% - 180px);
      }
      .paginator{
        display: flex;
        height: 120px;
        padding: 0 20px;
      }
    }
  }
</style>
