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
        <transition name="slide-in" type="animation">
          <v-list-item v-if="drawer">
            <v-list-item-content>
              <v-list-item-avatar size="130">
                <v-img :src="image_src" />
              </v-list-item-avatar>
              <v-list-item-title class="font-weight-black display-1"
                >Atushi Sato</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </transition>

        <v-divider></v-divider>

        <transition name="slide-in">
          <v-list dense v-if="drawer">
            <v-list-item
              v-for="item in items"
              :key="item.title"
              :to="item.link"
            >
              <v-list-item-icon>
                <v-icon class="py-3 my-7 font-weight-black display-1">{{
                  item.icon
                }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  class="py-3 my-5 font-weight-black display-1"
                  >{{ item.title }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </transition>
      </v-navigation-drawer>
    </header>
  </div>
</template>

<script>
export default {
  transition: {
    name: "slide-in",
  },
  data() {
    return {
      drawer: false,
      image_src: require("@/assets/about.png"),
      items: [
        { title: "HOME", icon: "mdi-home", link: "Home" },
        { title: "ABOUT", icon: "mdi-account-edit", link: "About" },
        { title: "SKILL", icon: "mdi-grease-pencil", link: "Skill" },
        { title: "WORKS", icon: "mdi-camera-burst", link: "Works" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.slide-in-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-in-enter-active {
  animation: slide-in 0.5s;
  transition: opacity 3s;
}
.slide-in-leave-active {
  animation: slide-in 0.5s reverse;
  transition: opacity 3s;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translate(0);
  }
}
</style>