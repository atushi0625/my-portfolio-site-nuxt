<template>
  <div class="header header-default">
    <header class="head">
      <v-app-bar app dark clipped-left>
        <!-- ここから追加 -->
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <!-- ここまで追加 -->
        <v-toolbar-title class="display-2 font-weight-bold"
          >MyPortfolioSite</v-toolbar-title
        >

        <v-spacer></v-spacer>
        <v-tab class="display-1"><nuxt-link to="/">Home</nuxt-link></v-tab>
        <v-tab class="display-1"
          ><nuxt-link to="/about">About</nuxt-link></v-tab
        >
        <v-tab class="display-1"
          ><nuxt-link to="/skill">Skill</nuxt-link></v-tab
        >
        <v-tab class="display-1"
          ><nuxt-link to="/works">Works</nuxt-link></v-tab
        >
      </v-app-bar>
      <!-- ここから -->
      <v-navigation-drawer v-model="drawer" clipped color="primary" app>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-avatar size="130">
              <v-img :src="image_src" />
            </v-list-item-avatar>
            <v-list-item-title class="font-weight-black"
              >Atushi Sato</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item v-for="item in items" :key="item.title" :to="item.link">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="font-weight-black">{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      image_src: require("@/assets/about.png"),
      items: [
        { title: "HOME", icon: "mdi-home", link: "Home" },
        { title: "ABOUT", icon: "mdi-account-edit", link: "About" },
        { title: "SKILL", icon: "mdi-grease-pencil", link: "Skill" },
        { title: "WORKS", icon: "", link: "Works" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>