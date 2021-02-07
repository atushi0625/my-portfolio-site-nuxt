<template>
  <div class="about">
    <v-btn depressed color="primary">
      <nuxt-link
        v-scroll-to="'#anchor'"
        to
        class="display-1 font-weight-black text-white"
        >START</nuxt-link
      >
    </v-btn>
    <h1>My History & Introduction</h1>
    <Img />
    <Introduction />
    <v-btn depressed color="error">
      <div id="anchor" class="display-1 font-weight-black">END</div>
    </v-btn>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>