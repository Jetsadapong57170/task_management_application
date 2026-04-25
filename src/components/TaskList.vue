<template>

  <div
    class="bg-taupe-100 w-full py-6 px-2 space-y-4 rounded-md mt-2 lg:max-h-[600px] lg:min-h-[600px] md:overflow-y-auto"
  >
    <div class="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-3">

      <TaskItem v-for="(task) of props.tasks" :key="task.id" :task="task"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Task } from "../models";
import TaskItem from "./TaskItem.vue";

interface Props {
    tasks: Task[];
}
const props = defineProps<Props>()

</script>

<style></style>
