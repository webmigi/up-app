<template>
  <div :class="['item-vacancy', {'item-vacancy-roll-down':rollUp}, {'item-vacancy-no-margin': noMargin}]">
    <div class="title-span">
      <span class="item-project_description_value">{{vacancy.title}}</span>
      <div class="btns-block">
        <div class="content-btn-wrap">
          <Content_btn title="Send CV"/>
        </div>
        <button class="open-vacancy-btn" @click="setRollUp">
          <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="29" width="40" height="2" fill="black"/>
            <rect v-if="!rollUp" x="31" y="10" width="40" height="2" transform="rotate(90 31 10)" fill="black"/>
          </svg>
        </button>
      </div>
    </div>

    <p class="content-p">
      {{vacancy.description}}
    </p>
  </div>
</template>

<script>
    import Content_btn from "../../shared/elements/Content_btn";

    export default {
        name: 'Item_vacancy',
        components: {Content_btn},
        props: {
            vacancy: Object,
            noMargin: Boolean
        },
        data() {
            return {
                rollUp: false
            }
        },
        methods:{
            setRollUp(){
                this.rollUp = !this.rollUp
            }
        }
    }
</script>

<style lang="scss" scoped>
  .item-vacancy {
    display: flex;
    height: auto;
    max-height: 50px;
    flex-direction: column;
    padding: 24px 20px 24px 30px;
    border-radius: 0;
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
    overflow: hidden;
    margin-bottom: 20px;
    transition: max-height 0.3s;

    .title-span {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .btns-block {
        display: flex;
        align-items: center;

        .content-btn-wrap {
          width: max-content;
          height: max-content;
          margin-right: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .open-vacancy-btn {
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;

          svg {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .content-p {
      white-space: pre-line;
    }
  }

  .item-vacancy-roll-down{
    max-height: 700px;
  }
  .item-vacancy-no-margin{
    margin-bottom: 0;
  }

  @media screen and (max-width: 1280px){
    .item-vacancy-roll-down{
      max-height: 720px;
    }
  }
</style>
