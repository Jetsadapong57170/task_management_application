<template>
  <div
    class="bg-white hover:bg-taupe-50 w-full p-2 rounded-md shadow-md border border-zinc-200 cursor-pointer"
     @click="handleOnUpdateTask"
  >
    <h2 class="font-bold text-[#333333]">
      {{ props.task.title }}
    </h2>
    <h3 class="text-sm">{{ props.task.description }}</h3>
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

    <div class="flex justify-between">
      <p class="text-zinc-400 text-sm">Due date : {{ props.task.dueDate }}</p>
      <svg
        class="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
        @click.stop="handleOnDeleteTaskClick()"
      >
        <path
          fill-rule="evenodd"
          d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TaskPriority, TaskStatus } from "../enums";
import type { Task } from "../models";
import { useTaskStore } from "../stores";

interface Props {
  task: Task;
}
const props = defineProps<Props>();

const taskStore = useTaskStore()

const handleOnUpdateTask = () => {
  taskStore.targetTask = props.task;
  taskStore.isShowUpdate = true;
}

const handleOnDeleteTaskClick = () => {
  taskStore.isShowConfirmDelete = true
  taskStore.targetTask = props.task
}

</script>

<style></style>
