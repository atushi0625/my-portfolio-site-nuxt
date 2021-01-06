<template>
<header>
      <v-app-bar
        app
        dark
      >
        <!-- ここから追加 -->
        <v-app-bar-nav-icon @click="drawer= !drawer"></v-app-bar-nav-icon>
        <!-- ここまで追加 -->
        <v-toolbar-title>MyPortfolioSite</v-toolbar-title>

       <v-spacer></v-spacer>

        <v-tab><nuxt-link to="/">Home</nuxt-link></v-tab>
        <v-tab><nuxt-link to="/about">About</nuxt-link></v-tab>
        <v-tab><nuxt-link to="/skill">Skill</nuxt-link></v-tab>
        <v-tab><nuxt-link to="/works">Works</nuxt-link></v-tab>

      </v-app-bar>
         <!-- ここから -->
  <v-navigation-drawer
      v-model="drawer"
      fixed temporary
      color="#C62828"
      app
    >
      <v-list-item>
        <!-- <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar> -->

        <v-list-item-content>
          <v-list-item-title>Atushi Sato</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title >{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</header>
</template>

<script>
export default {
    data () {
        return {
            drawer: false,
          items: [
              { title: 'HOME', icon: 'mdi-home', link: 'Home' },
          { title: 'ABOUT', icon: 'mdi-account-edit', link: 'About'},
          { title: 'SKILL', icon: '', link: 'Skill'},
          { title: 'WORKS', icon: '', link: 'Works' },
        ],
    }
  }
}
</script>

<style>

</style>