<template>
  <div class="flex justify-between">
    <h2 class="font-bold text-2xl text-yellow-950">Tasks 3</h2>
     <button
        class="text-white bg-yellow-900 box-border border border-transparent hover:bg-yellow-800 shadow-xs font-medium leading-5 rounded-md text-sm px-4  cursor-pointer"
      >
        Add Task
      </button>
  </div>
  <div
    class="bg-taupe-100 w-full py-6 px-2 space-y-4 rounded-md mt-2 lg:max-h-[600px] lg:min-h-[600px] md:overflow-y-auto"
  >
    <div class="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-3">
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </div>
  </div>
</template>

<script setup lang="ts">
import TaskItem from "./TaskItem.vue";
</script>

<style></style>
