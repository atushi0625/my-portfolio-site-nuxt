<template>
  <section>
    <v-container>
      <v-row justify="center" aligin-content="center">
        <v-col>
          <h1 class="pagetitle disply-3 font-weight-bold">About me</h1>
          <v-cord>
            <v-card-actions>
              <v-avatar size="230">
                <v-img :src="image_src" />
              </v-avatar>
            </v-card-actions>
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
      image_src: require("../assets/about.jpg"),
    };
  },
};
</script>
<style  lang="scss" scoped>
</style>