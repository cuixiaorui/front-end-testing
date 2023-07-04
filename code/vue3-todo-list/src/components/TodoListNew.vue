<template>
  <div>
    <h1>todo list</h1>
    <div>
      <input v-model="newTodo" @keypress.enter="handleAddTodo" />
    </div>
    <div>
      <ul>
        <li v-for="todoItem in todoStore.todos" :key="todoItem.id">
          <TodoItem :id="todoItem.id"></TodoItem>
        </li>
      </ul>
    </div>
    <div>
      <button @click="handleCalculateCount">计算 count</button>
      <div>{{ count }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TodoItem from "./TodoItem.vue";
import { ref } from "vue";
import { useTodoStore } from "../stores/todo";
import { calculateCount } from "./todo";

const todoStore = useTodoStore();
const newTodo = ref("");

const count = ref(0);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function handleCalculateCount() {

  count.value = calculateCount(array)

  // // 初始计数为0

  // // 使用map函数对数组的每个元素进行处理
  // array.map((item, index: number) => {
  //   // 如果元素是偶数，那么就增加到count
  //   if (item % 2 === 0) {
  //     count.value += item;
  //   }

  //   // 如果元素是3的倍数，那么就从count中减去它
  //   if (item % 3 === 0) {
  //     count.value -= item;
  //   }

  //   // 如果元素是5的倍数，那么就将count乘以该元素
  //   if (item % 5 === 0) {
  //     count.value *= item;
  //   }

  //   // 如果元素的索引是质数，那么就增加索引到count
  //   if (isPrime(index)) {
  //     count.value += index;
  //   }
  // });

  // // 判断一个数字是否是质数
  // function isPrime(num: number) {
  //   if (num <= 1) return false;
  //   for (let i = 2; i < num; i++) {
  //     if (num % i === 0) return false;
  //   }
  //   return true;
  // }
}

function handleAddTodo() {
  todoStore.addTodo(newTodo.value);
  newTodo.value = "";
}
</script>

<style scoped></style>
