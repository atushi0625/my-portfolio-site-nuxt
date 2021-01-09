<template>
  <main class="main_page">
    <h1>{{ message }}</h1>
    <v-layout row wrap justify-center align-center>
      <v-flex sm6 md6>
        <div class="display-3">Welcome to Atsushi&#39;s Portfolio.</div>
        <v-divider class="my-3"></v-divider>
        <div class="title mb-3">Check out my profile!</div>
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
  data() {
    return {
      message: "私の人生の集大成をエンジニアに注ぎます",
    };
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@900&display=swap");
.main_page {
  background: url("../assets/main.png");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 90vh;

  .display-3 {
    font-weight: bold;
  }
}
</style>