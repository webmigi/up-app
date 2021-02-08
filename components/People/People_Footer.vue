<template>
  <div class="jobs-footer">
    <div class="jobs-footer-column-1">
      <span class="block-title">Contact</span>
      <Footer/>
    </div>
    <img src="../../static/images/People/map.jpg">
  </div>
</template>

<script>
    import Footer from "../shared/Footer";

    export default {
        name: 'People_Footer',
        components: {Footer}
    }
</script>

<style lang="scss" scoped>
  .jobs-footer {
    margin-top: 355px;
    margin-left: var(--main-big-margin);
    margin-right: var(--main-mini-margin);
    display: flex;
    overflow: hidden;

    .jobs-footer-column-1{
       min-width: 480px;
    }
    img{
      height: 480px;
    }
  }

  @media screen and (max-width: 1280px){
    .jobs-footer{
      margin-top: 228px;
      margin-right: 0;
    }
  }
  @media screen and (max-width: 1024px){
    .jobs-footer{
      margin-top: 147px;
      .jobs-footer-column-1{
        min-width: 412px;
      }
    }
  }
</style>
