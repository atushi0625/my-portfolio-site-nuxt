<template>
    <v-container
        py-6
        px-5>
        <v-row
            justify="center"
            align-content="center">
            <v-col
    cols="12"
    xs="7"
    sm="10"
    md="10"
    lg="10"
    offset-xl="1">
    <h1 class="pagetitle display-3 font-weight-bold mt-8 mb-8">
        Skills
    </h1>
</v-col>

<v-col
    xs="12"
    sm="6"
    md="3"
    lg="3"
    v-for="skill in skills"
    :key="skill.title">
    <template>
        <v-hover>
            <v-card
                slot-scope="{ hover }"
                class="text-xs-center ma-4"
                :class="`elevation-${hover ? 12 : 4}`"
                color="teal darken-2">
                <v-card-title>
                    <div class="mx-auto">
                        <v-progress-circular
                            :value="skill.value"
                            :color="skill.color"
                            :rotate="-90"
                            width="15"
                            size="100">
                            {{ skill.value }}
                        </v-progress-circular>
                    </div>
                </v-card-title>

                <v-card-actions>
                    <v-layout justify-space-around>
                        <div class="headline">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <span
                                        :color="skill.color"
                                        :class="`${skill.color}--text`"
                                        class="subtitle-1"
                                        v-on="on">
                                        <v-icon size="18">
                                            {{ skill.icon }}
                                        </v-icon>
                                        {{ skill.title }}
                                    </span>
                                </template>
                                <span>{{ skill.duration }}</span>
                            </v-tooltip>
                        </div>
                    </v-layout>
                </v-card-actions>
            </v-card>
        </v-hover>
    </template>
</v-col>
        </v-row>

        <div class="text-center pb-6 px-5">
            <v-btn
                x-large
                color="grey darken-3"
                rounded
                to="/"
                class="mx-4 my-2">
                <v-icon class="mr-2">
                    home
                </v-icon> back home
            </v-btn>
        </div>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          title: "HTML & CSS",
          value: 0,
          absoluteValue: 80,
          color: "white",
          icon: "mdi-language-html5",
          show: false,
          duration: "5 years",
        },
       // 略
        {
          title: "JavaScript",
          value: 0,
          absoluteValue: 100,
          color: "white",
          icon: "mdi-language-javascript",
          show: false,
          duration: "25 years / very good",
        },
        {
          title: "Vue.js",
          value: 0,
          absoluteValue: 100,
          color: "white",
          icon: "mdi-vuejs",
          show: false,
          duration: "25 years / very good",
        },
      ],
      interval: {},
      expand: false,
    }
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  mounted() {
    let timesRun = 0;
    this.interval = setInterval(() => {
      if (timesRun === 10) {
        clearInterval(this.interval);
        return;
      }
      timesRun += 1;
      this.skills.forEach((skill) => {
        if (skill.absoluteValue !== skill.value) {
          skill.value += 10
        }
      });
    }, 300)
  }
};
</script>