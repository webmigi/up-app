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
      <transition-group name="modal-image" class="image-list">
        <img v-if="idx === 0" key="0" class="img-span" src="../static/images/Item_Project/contentImg1.jpg"/>
        <img v-if="idx === 1" key="1" class="img-span" src="../static/images/Item_Project/contentImg2.jpg"/>
        <img v-if="idx === 2" key="2" class="img-span" src="../static/images/Item_Project/contentImg3_2.jpg"/>
        <img v-if="idx === 3" key="3" class="img-span" src="../static/images/Item_Project/contentImg4.jpg"/>
      </transition-group>
      <div class="paginator">
        <div class="arrow-wrap">
          <button class="btn-left" @click="idxDown()">
            <svg viewBox="0 0 67 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="imgModalFill" d="M0 12L20 23.547V0.452994L0 12ZM18 14H66.5V10H18V14Z"/>
            </svg>
          </button>
          <button class="btn-right" @click="idxUp()">
            <svg viewBox="0 0 67 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="imgModalFill" d="M66.5 12L46.5 0.452996L46.5 23.547L66.5 12ZM48.5 10L-1.74846e-07 10L1.74846e-07 14L48.5 14L48.5 10Z"/>
            </svg>
          </button>
        </div>
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
        data() {
            return {
              idx: 0
            }
        },
        methods: {
          ...mapActions('app', ['setModalImgIsActive']),
          idxUp() {
            if(this.idx !== 3) {
              this.idx++
            } else {
              this.idx = 0
            }
          },
          idxDown() {
            if(this.idx !== 0) {
              this.idx--
            } else {
              this.idx = 3
            }
          }
        },
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
        position: relative;
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
        box-sizing: border-box;
        bottom: 0;
        left: 0;
        width: 100%;
        transform: translateY(calc(100% + 30px));
        .arrow-wrap {
          width: 100%;
          .btn-left, .btn-right {
            min-width: 60px;
            width: 60px;
            margin: 0;
          }
        }
      }
    }
  }
  .modal-image-enter-active, .modal-image-leave-active {
    transition: opacity 1s;
  }
  .modal-image-enter, .modal-image-leave-to {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
