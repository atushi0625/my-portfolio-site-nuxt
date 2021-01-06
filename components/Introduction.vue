<template>
  <div>

    <v-alert
      border="top"
      :color="year.color"
      dark
      v-for="(year,i) in years"
      :key="i"
    >
     <h1>{{year.title}}</h1>
     <h2>{{year.year}}</h2>
     <h3>{{year.content}}</h3><br>
     <p>{{year.text}}</p>
     <span class="font-weight-bold font-size:30px;">{{year.text2}}</span>
    </v-alert>
    <v-alert
      border="right"
      color="blue-grey"
      dark
    >
      I'm an alert with a right border and blue-grey color
    </v-alert>
    <v-alert
      border="bottom"
      color="pink darken-1"
      dark
    >
      I'm an alert with a bottom border and pink color
    </v-alert>
    <v-alert
      border="left"
      color="indigo"
      dark
    >
      I'm an alert with a border left type info
    </v-alert>
  </div>
</template>

<script>
export default {
    data(){
        return {
            years:[
                {year:'2008年',  
                 title: '学歴',
                 color: 'red lighten-2',
                 content: '秋田県立の高等学校 総合ビジネス科を卒業',
                 text: 'ソフトテニス部に３年間所属：毎日の練習に加え、朝練・家でのトレーニング、冬場に吹雪の中を走ってました',
                       text2:'私のストイックさはここから始まった！！',
                },
                {year: '2008年~2013年',
                 title: '職歴:製造業',
                 color: 'blue lighten-2',
                 content: '大手食品メーカ工場にて正社員として勤務',
                 text:'社会で働くことの厳しさ痛感！12時間労働・夜勤ありでしたので体力面自信あり！',
                },
                {year: '20014年~2019年',
                 title: '職歴:営業・接客業',
                 color: 'blue-grey',
                 content: 'ベンチャー企業正社員として勤務',
                 text:'飛び込み営業で経験した度胸、何事も恐れない信念！！',
                 text2:'接客業で得たコミュニケーション能力！！',
                },
                {year: '2019年~現在',
                 title: '職歴:技術派遣業',
                 color: 'blue-grey',
                 content: '大手派遣会社の正社員として現在在職中',
                 text:'',
                 text2:'接客業で得たコミュニケーション能力！！',
                },

            ],

        }
    }
}
</script>
