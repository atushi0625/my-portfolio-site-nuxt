<template>
  <section>
    <v-container>
      <v-row justify="center" align-content="center">
        <v-col xs="7" sm="10" md="11" lg="12" offset-xl="1">
          <v-cord>
            <v-card-actions class="d-flex justify-center mb-6">
              <v-avatar size="230">
                <v-img :src="image_src" />
              </v-avatar>
            </v-card-actions>

            <v-cod-title>
              <div>
                <h1 class="font-weight-bold mb-5">
                  {{ myname }}
                </h1>
                <div class="headline mb-6">{{ message }}</div>
              </div>
            </v-cod-title>
            <v-cord-text class="font-weight-bold">
              <p>座右の銘：{{ motto }}</p>
              <p>出身：{{ from }}</p>
              <p>趣味：{{ hobby }}</p>
              <p>{{ hobbys }}</p>
            </v-cord-text>
          </v-cord>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      myname: "佐藤　敦（サトウ　アツシ）",
      message:
        "見た目はイカツイ系ですが、初対面では見た目と実際とのギャップに驚かれます！",
      motto: "「好きこそ物の上手なれ」",
      from: "秋田県横手市(現在は東京都在住)",
      hobby: "キックボクシング、筋トレ、料理",
      hobbys:
        "2018年頃から格闘技がやりたくてキックボクシングジムに入会。アマチュアで試合3度出場し、3戦3勝",
      image_src: require("../assets/about.jpg"),
    };
  },
};
</script>
<style  lang="scss" scoped>
</style>