<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="450">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <a :href="url">
      <v-img height="250" :src="img_src"></v-img>
    </a>

    <v-card-title>Qiitaにてアウトプット</v-card-title>

    <v-card-text>
      <div class="font-weight-bold title text-justify">
        勉強したことをQiitaに投稿してアウトプットしています。
        自分の言葉で記事を書くことにより、より理解力を深められるので積極的に活用しています。
        主に、分からなくて深堀りして調べてことを投稿することが多いです。
        今後も引き続きUPしていこうと思います。
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    img_src: require("../assets/Qiita.png"),
    url: "https://qiita.com/atushisato0625",
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>