<template>
  <div class="flex justify-between">
    <h2 class="font-bold text-2xl text-yellow-950">
      Tasks {{ taskStore.filteredTasks.length }}
    </h2>
    <button
      @click="handleOnAddTask"
      class="text-white bg-yellow-900 box-border border border-transparent hover:bg-yellow-800 shadow-xs font-medium leading-5 rounded-md text-sm px-4 cursor-pointer"
    >
      Add Task
    </button>
  </div>
  <div
    class="bg-taupe-100 w-full py-6 px-2 space-y-4 rounded-md mt-2  overflow-y-auto"
  >
    <div class="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-3">
      <TaskItem
        v-for="task of taskStore.filteredTasks"
        :key="task.id"
        :task="task"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import TaskItem from "./TaskItem.vue";
import { useTaskStore } from "../stores";

const taskStore = useTaskStore()

const handleOnAddTask = () => {
  taskStore.isShowAdd = true
}
</script>

<style></style>
