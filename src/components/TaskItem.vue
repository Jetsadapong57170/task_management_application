<template>
  <div class="bg-white w-full p-2 rounded-md shadow-md border border-zinc-200">
    <h2 class="font-bold text-[#333333]">
      {{ props.task.title }}
    </h2>
    <div
      v-if="props.task.status == TaskStatus.TO_DO"
      class="bg-cyan-400 w-fit px-2 py-0.5 rounded-md my-2"
    >
      <p class="text-cyan-900 font-bold">To Do</p>
    </div>
    <div
      v-else-if="props.task.status == TaskStatus.IN_PROGRESS"
      class="bg-sky-400 w-fit px-2 py-0.5 rounded-md my-2"
    >
      <p class="text-sky-900 font-bold">In Progress</p>
    </div>
    <div
      v-else-if="props.task.status == TaskStatus.DONE"
      class="bg-blue-400 w-fit px-2 py-0.5 rounded-md my-2"
    >
      <p class="text-blue-900 font-bold">Done</p>
    </div>
    <div
      v-if="props.task.priority == TaskPriority.LOW"
      class="bg-green-300 w-fit px-2 py-0.5 rounded-md my-2"
    >
      <p class="text-green-900 font-bold">Low</p>
    </div>
    <div
      v-else-if="props.task.priority == TaskPriority.MEDIUM"
      class="bg-amber-300 w-fit px-2 py-0.5 rounded-md my-2"
    >
      <p class="text-amber-900 font-bold">Medium</p>
    </div>
    <div
      v-else-if="props.task.priority == TaskPriority.HIGH"
      class="bg-pink-300 w-fit px-2 py-0.5 rounded-md my-2"
    >
      <p class="text-pink-900 font-bold">High</p>
    </div>

    <p class="text-zinc-400 text-sm">Due date : {{ props.task.dueDate }}</p>
  </div>
</template>

<script setup lang="ts">
import { TaskPriority, TaskStatus } from "../enums";
import type { Task } from "../models";

interface Props {
  task: Task;
}
const props = defineProps<Props>();
</script>

<style></style>
