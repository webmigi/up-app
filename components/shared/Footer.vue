<template>
  <div class="footer">
    <div :class="['content', {'main-content-margin-left-right': this.$route.path !== '/People'}]">
      <nuxt-link to="/">
        <span class="footer-logo">UP</span>
      </nuxt-link>
      <div class="contacts">
        <span class="footer-contacts">
          Overtoom 2a, Castricum
           </span>
        <span class="footer-contacts">The Netherlands, 1901 EW </span>
        <span class="footer-contacts">T +31 (0)251 82 76 10  </span>
        <span class="footer-contacts email">studio@uparchitecture.nl </span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style lang="scss" scoped>
  .footer {
    position: relative;
    background-color: #FFFFFF;
    width: 100%;
    display: flex;
    z-index: 850;

    .content {
      margin-top: 121px;
      margin-bottom:70px;
      display: flex;
      flex-direction: column;

      .footer-logo{
        cursor: pointer;
      }
      .contacts {
        width: 100%;
        min-height: 150px;
        display: flex;
        flex-direction: column;

        .email {
          margin-top: auto;
        }
      }
    }
  }
</style>
