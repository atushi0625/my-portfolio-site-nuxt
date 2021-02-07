<template>
  <footer>
    <v-footer padless>
      <v-card-text class="text-center">
        <v-btn
          v-for="(link, index) in links"
          :key="index"
          class="mx-9"
          dark
          icon
        >
          <a :href="link.url">
            <v-icon size="60px" color="white">
              {{ link.icon }}
            </v-icon>
          </a>
        </v-btn>
      </v-card-text>
      <v-col class="text-center" cols="30">
        {{ new Date().getFullYear() }} —
        <strong>Atsushi Sato. All Rights Reserved.</strong>
      </v-col>
    </v-footer>
  </footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        title: "facebook",
        url: "https://www.facebook.com/atushi0213",
        icon: "mdi-facebook",
      },

      {
        title: "twitter",
        url: "https://twitter.com/atushisato0625",
        icon: "mdi-twitter",
      },

      {
        title: "github",
        url: "https://github.com/atushi0625",
        icon: "mdi-github",
      },

      {
        title: "instagram",
        url: "https://www.instagram.com/atushi213/?hl=ja",
        icon: "mdi-instagram",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
</style>