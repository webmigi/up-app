<template>
  <div class="app">
    <Main_page/>
  </div>
</template>

<script>
    import Main_page from "./Main_page";

    export default {
        name: 'App',
        components: {Main_page}
    }
</script>

<style lang="scss">
  .app {
    width: 100%;
    height: 100%;
  }

</style>
