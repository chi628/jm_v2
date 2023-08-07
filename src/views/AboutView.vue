<script setup lang="ts">
import PromoteCard from '@/components/PromoteCard.vue'
const banner = `${
  import.meta.env.VITE_PUBLIC_URL
}/Ntyabf3nCSXfhbkTVrZVAjUeosvvBjwwSSEOFvxhT7nyITePu5ZXFt2WiaQfSTSe1gi6WiTVvKHuyNF3V91sZGRW05F4shgl04BBUU9ezdz2OfElUoUlrcBbKrGEggFH.jpg`
const list = [
  {
    title: '品牌故事',
    content:
      '2016年，一對熱戀中的情侶到歐洲自助旅行。在漫無目的的旅程中，他們被一陣香味吸引，來到了一間由老奶奶經營的老舊相館。原來這陣香味是奶奶因太過思念已逝丈夫，因而將丈夫生前最愛的菸草味道，融合自己最愛的香水味，做成香包掛在了店門口，好讓丈夫的味道能夠天天陪伴著她。戀人頓時明白，原來味道可以是思念一個人的方式，於是兩人決定要一起找出足以代表他們感情的味道。並以兩人的英文名字字首作為品牌名稱，希望能有更多人替記憶找到一份味道。',
    bannerUrl: '../assets/images/about-story.jpg'
  },
  {
    title: '理念與堅持',
    content:
      'J&M 相信味道也能變成一種記憶。自成立以來，堅持使用頂級的原料。嚴格挑選優質的香氛成份，採用天然植萃-橄欖油、乳油木果油與精油。只希望為每一份記憶提供最純淨且真實的味道。',
    bannerUrl: '../assets/images/about-persist.jpg',
    LTR: true
  },
  {
    title: '永恆記憶',
    content:
      '走在路上，偶然聞到熟悉的菸味，你或許會想起小時候不苟言笑卻全心全意陪伴你的爸爸。雨後田野，清香的青草味道和著一點泥巴味，小時候在鄉間小路奔跑的模樣歷歷在目。又或者帶著苦澀卻又香濃的咖啡香，會讓你想起那些熬夜奮鬥的夜晚。每一份記憶的背後，都有一份專屬的味道。歡迎到 J&amp;M替這份味道寫下專屬的故事。',
    bannerUrl: '../assets/images/about-memory.jpg'
  }
]
</script>
<template>
  <div class="w-full lg:max-w-[1220px] h-auto mx-auto space-y-6">
    <img :src="banner" alt="" class="rounded-md shadow-[1px_1px_2px_1px_rgba(124,100,75,0.6)]" />
    <div>
      <PromoteCard v-for="(item, index) in list" :key="`${item.title}_${index}`" v-bind="item" />
    </div>
  </div>
</template>
