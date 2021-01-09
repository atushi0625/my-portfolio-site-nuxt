<template>
  <div>
    <h1 class="main_title">Skills</h1>
    <v-card v-for="skill in skills" :key="skill.title">
      <v-container my-15>
        <v-icon size="40">{{ skill.icon }}</v-icon>
        {{ skill.title }}
        <v-progress-linear
          :color="skill.color"
          :value="skill.value"
          height="25"
        >
          <strong>{{ skill.value }}%</strong>
        </v-progress-linear>
        <br />
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interval: {},
      skills: [
        {
          title: "HTML&CSS",
          icon: "mdi-language-html5",
          value: 0,
          absoluteValue: 60,
          color: "green",
        },
        {
          title: "JavaScript",
          icon: "mdi-language-javascript",
          value: 0,
          absoluteValue: 60,
          color: "blue",
        },
        {
          title: "Vue.js&Nuxt.js",
          icon: "mdi-vuejs",
          value: 0,
          absoluteValue: 70,
          color: "red",
        },
        {
          title: "Firebase",
          icon: "mdi-firebase",
          value: 0,
          absoluteValue: 70,
          color: "#FFB74D",
        },
      ],
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    let timesRun = 0; //0回からスタートして
    this.interval = setInterval(() => {
      if (timesRun === 10) {
        //10回処理を繰り返したら終わり
        clearInterval(this.interval);
        return;
      }
      timesRun += 1; //〜回ずつ+され、10になったら終わり
      this.skills.forEach((skill) => {
        //配列名.forEach   要素の値
        if (skill.absoluteValue !== skill.value) {
          skill.value += 10; //10％ずつ上がっていく
        }
      });
    }, 300); //0.3秒経過する毎に処理を繰り返す
  },
};
</script>

<style lang="scss" scoped>
.main_title {
  font-weight: bold;
  font-size: 50px;
  text-align: center;
}
</style>