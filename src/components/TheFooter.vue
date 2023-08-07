<script setup lang="ts">
import FooterItem from '../components/FooterItem.vue'
import type { FooterType } from '@/type/footer'
const list = [
  // {
  //   title: '實體店面',
  //   info: '地址：桃園市中壢區環中東路1巷1號',
  //   operation: FooterType.ADDRESS
  // },
  // {
  //   tie
  // }
]
</script>
<template>
  <footer class="w-full h-[250px] bg-[#F7EFE5]">
    <div>Hey,let's keep in touch!</div>
    <div>
      <div>
        <input
          type="email"
          name="電子信箱"
          placeholder="your email address"
          class="border border-solid border-red-300 outline-none"
        />
      </div>
    </div>
    <FooterItem />
  </footer>
</template>
