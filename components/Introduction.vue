<template>
  <div>
    <v-alert
      border="top"
      :color="year.color"
      dark
      v-for="(year, i) in years"
      :key="i"
    >
      <h1>{{ year.title }}</h1>
      <h2>{{ year.year }}</h2>
      <h3>{{ year.content }}</h3>
      <br />
      <span class="year_text">{{ year.text }}</span
      ><br />
      <span class="year_text">{{ year.text2 }}</span>
    </v-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      years: [
        {
          year: "2008年",
          title: "学歴",
          color: "red lighten-2",
          content: "秋田県立の高等学校 総合ビジネス科を卒業",
          text:
            "ソフトテニス部に３年間所属：毎日の練習に加え、朝練・家でのトレーニング、冬場に吹雪の中を走ってました",
          text2: "私のストイックさはここから始まった！！",
        },
        {
          year: "2008年~2013年",
          title: "職歴:製造業",
          color: "blue lighten-2",
          content: "大手食品メーカ工場にて正社員として勤務",
          text:
            "社会で働くことの厳しさ痛感！12時間労働・夜勤ありでしたので体力面自信あり！",
        },
        {
          year: "20014年~2019年",
          title: "職歴:営業・接客業",
          color: "blue-grey",
          content: "ベンチャー企業正社員として勤務",
          text: "飛び込み営業で経験した度胸、何事も恐れない信念！！",
          text2: "携帯電話販売で得たググリ力、提案・コミュニケーション能力！！",
        },
        {
          year: "2019年~現在",
          title: "職歴:技術派遣業",
          color: "indigo",
          content: "大手派遣会社の正社員として現在在職中",
          text:
            "ガス検知器メーカーにて自社製品の定期点検、修理などが主な業務内容になります。",
          text2:
            "酸欠や有毒ガス、爆発するガスなど取扱っているため、注意しないと命取りに！",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.year_text {
  font-weight: bold;
  font-size: 25px;
}
</style>
