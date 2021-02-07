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
    justify-content: space-between;

    .jobs-footer-column-1{
       width: 480px;
    }
  }
</style>
