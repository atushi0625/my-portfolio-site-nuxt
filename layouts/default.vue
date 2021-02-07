<template>
  <v-app>
    <Header />
    <v-content>
      <v-container>
        <transition name="page" appear>
          <Nuxt />
        </transition>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>
 
<script>
export default {
  data() {},
};
</script>
 
<style lang="scss" scoped>
.page-enter {
  opacity: 0;
}
.page-enter-active {
  transition: opacity 1s;
}
</style>