<template>
  <div class="grid grid-cols-3 gap-3">
    <div
      class="bg-taupe-100 flex justify-center items-center flex-col p-3 rounded"
    >
      <span class="text-yellow-950 font-medium sm:text-lg xs:text-xs"
        >To DO</span
      >
      <h1 class="text-yellow-950 font-medium text-3xl">{{ countToDo }}</h1>
    </div>
    <div
      class="bg-taupe-100 flex justify-center items-center flex-col p-3 rounded"
    >
      <span class="text-yellow-950 font-medium sm:text-lg xs:text-xs"
        >In Progress</span
      >
      <h1 class="text-yellow-950 font-medium text-3xl">
        {{ countInProgress }}
      </h1>
    </div>
    <div
      class="bg-taupe-100 flex justify-center items-center flex-col p-3 rounded"
    >
      <span class="text-yellow-950 font-medium sm:text-lg xs:text-xs"
        >Done</span
      >
      <h1 class="text-yellow-950 font-medium text-3xl">{{ countDone }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useTaskStore } from "../stores";
import { TaskStatus } from "../enums";

const taskStore = useTaskStore();

const countToDo = computed(() => {
  let sum = 0;
  for (const task of taskStore.tasks) {
    if (task.status == TaskStatus.TO_DO) sum++;
  }
  return sum;
});

const countInProgress = computed(() => {
  let sum = 0;
  for (const task of taskStore.tasks) {
    if (task.status == TaskStatus.IN_PROGRESS) sum++;
  }
  return sum;
});

const countDone = computed(() => {
  let sum = 0;
  for (const task of taskStore.tasks) {
    if (task.status == TaskStatus.DONE) sum++;
  }
  return sum;
});
</script>

<style></style>
