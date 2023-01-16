<!--
 * @Author: ycshang
 * @Date: 2023-01-11 18:22:27
 * @LastEditors: ycshang
 * @LastEditTime: 2023-01-16 21:42:53
-->
<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
