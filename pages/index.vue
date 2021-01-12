<template>
  <main class="main_page">
    <transition name="fade">
      <h1
        class="pt-3 font-weight-bold red--text display-2 font-italic"
        @load="show = !show"
      >
        {{ message }}
      </h1>
    </transition>
    <v-layout row wrap justify-center align-center>
      <v-flex sm6 md6>
        <div class="display-3 font-weight-black">
          Welcome to Atsushi&#39;s Portfolio.
        </div>
        <v-divider class="my-3"></v-divider>
        <div class="mb-3 display-1">Check out my profile!</div>
        <v-layout justify-center>
          <v-btn color="red" large to="/about">profile</v-btn>
        </v-layout>
      </v-flex>
      <v-flex sm6 md6>
        <v-img src="" aspect-ratio="1" />
      </v-flex>
    </v-layout>
  </main>
</template>

<script>
export default {
  transition: {
    name: "fade",
  },
  data() {
    return {
      show: true,
      message: "私の人生の集大成をエンジニアに注ぎます！！",
    };
  },
};
</script>
<style lang="scss" scoped>
.main_page {
  background: url("../assets/main.jpg");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 90vh;

  // h1 {

  // }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}
</style>