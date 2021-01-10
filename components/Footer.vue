<template>
  <footer>
    <v-footer padless>
      <v-card-text class="text-center">
        <v-btn v-for="icon in icons" :key="icon" class="mx-9" dark icon>
          <v-icon size="60px">
            {{ icon }}
          </v-icon>
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
    icons: ["mdi-facebook", "mdi-twitter", "mdi-github", "mdi-instagram"],
  }),
};
</script>

<style lang="scss" scoped>
</style>