<template>
  <section class="home-about">
    <div class="section__title"></div>
    <!-- ここから追加 -->
    <v-container>
      <v-row class="home-about__contents">
        <v-col md="5" class="home-about__contents-img">
          <img src="../assets/about.jpg" class="img-fluid" />
        </v-col>
        <v-col md="5" class="home-about__contents-text">
          <div class="contents_text">
            <p>絶対にエンジニアになります</p>
            <p>横手焼きそばで有名</p>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <!-- ここまで追加 -->
  </section>
</template>
<script>
export default {
  data() {
    return {
      texts: [{}],
    };
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@900&display=swap");
.img-fluid {
  width: auto;
  height: 500px;
}
.contents_text {
  width: 100%;
  font-family: "Noto Sans JP", sans-serif;
}
</style>