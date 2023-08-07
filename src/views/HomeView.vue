<script setup lang="ts">
import PromoteCard from '@/components/PromoteCard.vue'
import ProductCard from '@/components/ProductCard.vue'
const bannerUrl = `${
  import.meta.env.VITE_PUBLIC_URL
}/Y9gkvcUyOaVwqpxarWLAYKsgTjp5K8t0VcQRxjlmvinYum5cJgpESLROwpeAopUfOKYN21lwbSC3gtmSgwtRamL8QtustM35kwVoJOFwqJ2bsutEmVA8Tdhu5c3ImjnV.jpg`

const promoteList = [
  {
    title: 'Create your own memory',
    subTitle: '讓記憶成為永恆<br/>創造屬於自己專屬的回憶',
    content: `每種味道，在每個人心中，都會勾勒出不一樣的畫面<br/> 
      回憶或許稍縱即逝，但是味道可以永恆的留存。<br/> 
      如果你也有一份珍貴的回憶想保存下，<br/> 
      那麼歡迎你來 J&M 創造屬於你自己的回憶。`,
    bannerUrl: '../assets/images/reserve.jpg',
    LTR: true
  },
  {
    title: `Valentine's Day`,
    subTitle: '平淡的生活也要有儀式感',
    content: `歡慶情人節，快與另一半挑選出你們感情的代表味！<br/>結帳輸入折扣碼 <span class="font-bold text-xl text-red-500 italic">iloveu</span> ，不限金額立即88 折。`,
    bannerUrl: '../assets/images/valentine.jpg'
  }
]

const productList = [
  {
    imgUrl: `${
      import.meta.env.VITE_PUBLIC_URL
    }/Pxai7ZO9C3388VSBAlghs7cJUyYasptEBHi1xhimGhgRAuakNKie0NlxrcLzI8CeUCqTrgyBGocMeSuZa5SD58g5yTsDrrOgCtM2g4WHhffMzTIKttNRnGzjah1BtC0d.jpg`,
    link: '/',
    title: '芳香精油 | 做自己的芳療師',
    category: '精油類'
  },
  {
    imgUrl: `${
      import.meta.env.VITE_PUBLIC_URL
    }/bU84w9CFD3myUd2tKgLNMBtKpiIQBajVxMyxixuQy1wR24VmsdZk3LD57ckQBCgcYR4MlitSHUeGYBnsmkBJSqHMYNJZWtRtHHo5on2gyWlhNko6BhnrKz9NiwnEIo8q.jpg`,
    link: '/',
    title: '香氛噴霧 | 迎接嶄新的每一天',
    category: '香氛類'
  },
  {
    imgUrl: `${
      import.meta.env.VITE_PUBLIC_URL
    }/nncGKS5HjUosKXSK0whEAjf3EeAmI95N7p7m48f3jG4Tocgkq3hxDF32DI2qYWpIjRDi5wvlLkyMCvujROjCrHrEljH5L36evgE1d6pahAfXnBpdmbFoQM18mtjKksNu.jpg`,
    link: '/',
    title: '大豆蠟燭 | 清新香味療癒自我',
    category: '蠟燭類'
  },
  {
    imgUrl: `${
      import.meta.env.VITE_PUBLIC_URL
    }/tgr5aisSAd7nsxThEn0728koKeQiN9i37yNTM8QvuYrgs9CqaWnWLZfDtRFw0jBCZn4DHvE2v05Gkmsw4tSLHPRMLJvfKdHx1Lf2syh7xatfmZlYae9oaVhtjjAaOSEB.jpg`,
    link: '/',
    title: '手工芳香膏 ｜ 散發優雅清香',
    category: '芳香膏'
  }
]
</script>

<template>
  <div class="w-full lg:max-w-[1220px] h-auto mx-auto space-y-6">
    <img :src="`${bannerUrl}`" alt="" class="w-full h-auto" />
    <div class="space-y-6">
      <PromoteCard v-for="(item, index) in promoteList" :key="index" v-bind="item" />
    </div>
    <div class="w-full mx-auto space-y-6">
      <div class="text-text text-[28px] font-bold text-center">商品介紹</div>
      <div class="grid grid-cols-2 gap-5">
        <ProductCard
          v-for="(item, index) in productList"
          :key="`${item.title}_${index}`"
          v-bind="item"
        />
      </div>
    </div>
  </div>
</template>
