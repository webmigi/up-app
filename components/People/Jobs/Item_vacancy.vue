<template>
  <div :class="['item-vacancy',  {'item-vacancy-no-margin': noMargin}]"
  :style="'max-height: ' +activeRollDawnHeight+ 'px'">
    <div class="title-span">
      <span class="item-project_description_value">{{vacancy.title}}</span>
      <div class="btns-block">
        <div class="content-btn-wrap">
          <Content_btn title="Send CV" place="jobs"/>
        </div>
        <button class="open-vacancy-btn" @click="setRollUp">
          <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="29" width="40" height="2" fill="black"/>
            <rect v-if="!rollUp" x="31" y="10" width="40" height="2" transform="rotate(90 31 10)" fill="black"/>
          </svg>
        </button>
      </div>
    </div>

    <p class="content-p" ref="vacancy_description">
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
                rollUp: false,
                hrefsSpanHeight: null
            }
        },
        mounted() {
            this.setVacancyDescriptionHeight();
        },
        methods:{
            setRollUp(){
                this.rollUp = !this.rollUp
            },
            setVacancyDescriptionHeight(){
                let heightBlock = this.$refs.vacancy_description.clientHeight;
                this.hrefsSpanHeight = heightBlock + 50
            },
        },
        computed:{
            activeRollDawnHeight(){
                return this.rollUp ? this.hrefsSpanHeight : 50
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

  .item-vacancy-no-margin{
    margin-bottom: 0;
  }

  @media screen and (max-width: 414px){
    .item-vacancy{
      padding: 13px 0;
      margin-bottom: 10px;
      .title-span{
        .btns-block{
          .content-btn-wrap{
            margin-right: 10px;
          }
          .open-vacancy-btn{
            width: 40px;
            height: 40px;
            padding: 5px;
          }
        }
      }
    }
  }
</style>
