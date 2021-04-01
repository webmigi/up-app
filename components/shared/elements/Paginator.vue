<template>
  <div class="paginator">
        <svg
          width="21"
          height="16"
          viewBox="0 0 21 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="prevAction"
        >
          <path
            d="M0.292892 7.2929C-0.0976315 7.68342 -0.0976314 8.31658 0.292893 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928933C7.68054 0.538409 7.04738 0.538409 6.65685 0.928933L0.292892 7.2929ZM21 7L1 7L1 9L21 9L21 7Z"
            fill="#000"
          />
        </svg>

        <svg
          width="21"
          height="16"
          viewBox="0 0 21 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="nextAction"
        >
          <path
            d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.2929L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-8.74228e-08 9L20 9L20 7L8.74228e-08 7L-8.74228e-08 9Z"
            fill="#000"
          />
        </svg>
  </div>
</template>

<script>
export default {
  name: 'Paginator',
  props:{
    page: String,
    elIndex: Number,
    elsArr: Array
  },
  methods: {
    nextAction() {
      if (this.page && (this.elIndex || this.elIndex ===0) && this.elsArr) {
        this.elsArr.length - 1 === this.elIndex ?
          this.$router.push({path: `${this.page}/${this.elsArr[0].id}`})
          :
          this.$router.push({path: `${this.page}/${this.elsArr[this.elIndex + 1].id}`})
      }
    },
    prevAction() {
      if (this.page && (this.elIndex || this.elIndex ===0) && this.elsArr) {
        this.elsArr[0].id === this.elsArr[this.elIndex].id ?
          this.$router.push({path: `${this.page}/${this.elsArr[this.elsArr.length - 1].id}`})
          :
          this.$router.push({path: `${this.page}/${this.elsArr[this.elIndex - 1].id}`})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.paginator{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
