import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
    duration:1000,//早すぎないように遅くする
  offset: -60, // 固定ヘッダーがある場合に、オフセットで調整する
  easing:"ease-out"//ease-outが直感的かと思い採用
})