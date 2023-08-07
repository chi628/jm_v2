<script setup lang="ts">
import type { PropType } from 'vue'
enum FooterType {
  MAIL,
  PHONE,
  ADDRESS
}
defineProps({
  title: String,
  info: String,
  operation: Object as PropType<FooterType>
})
</script>
<template>
  <div>
    <div>{{ $props.title }}</div>
    <div></div>
  </div>
</template>
