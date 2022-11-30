<template>
  <div>
    num1:<input v-model.number="num1" style="width: 100px; border: 1px solid red" /><br />
    num2:<input v-model.number="num2" style="width: 100px; border: 1px solid red" />
    <!-- <span>加法等于:{{ addNum }}</span> -->
    <span>重命名加法等于:{{ addNumFromAdd }}</span>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import useAdd from '/@/hooks/useAdd';
  const num1 = ref<number>(1);
  const num2 = ref<number>(2);
  // const { addNum: addNumFromAdd, addFn } = useAdd({ num1: num1.value, num2: num2.value });
  const { addNum: addNumFromAdd, addFn } = useAdd({ num1, num2 });
  addFn(num1.value, num2.value);
</script>
