<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="450">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    >
    </v-img>

    <v-card-title>ポートフォリオサイト</v-card-title>

    <v-card-text>
      <div class="font-weight-bold title text-justify">
        フロントエンドの学習と私自身を知っていただくという観点から、NuxtとVuetifyを使って作成しました。
        こちらのサイトを作成したことによってアウトプットして作品を作ることがプログラミング学習において
        いかに大事かを学ぶことができました。今後も引き続き改良を重ねていきたいと思います。
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>Vue.js</v-chip>

        <v-chip>Nuxt.js</v-chip>

        <v-chip>Vuetify</v-chip>

        <v-chip>JavaScript</v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    flg: false,
  }),

  methods: {},
};
</script>