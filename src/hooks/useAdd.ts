import { ref, Ref, watch } from 'vue';
interface NumOptions {
  // num1: number;
  // num2: number;
  num1: Ref<number>;
  num2: Ref<number>;
}
const useAdd = ({ num1, num2 }: NumOptions) => {
  const addNum = ref(0);
  watch([num1, num2], ([num1, num2]) => {
    console.log('监听');

    addFn(num1, num2);
  });
  const addFn = (num1: number, num2: number): void => {
    addNum.value = num1 + num2;
    console.log('计算');
  };
  return {
    addNum,
    addFn,
  };
};
export default useAdd;
