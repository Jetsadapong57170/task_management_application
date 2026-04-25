<template>
  <h2 class="font-bold text-2xl">Tasks 3</h2>
  <div
    class="bg-zinc-100 w-full py-6 px-2 space-y-4 rounded-md mt-2 lg:max-h-[600px] lg:min-h-[600px] md:overflow-y-auto"
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
