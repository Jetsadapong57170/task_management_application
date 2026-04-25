<template>
  <div
    class="absolute top-0 min-h-screen w-full z-100 flex justify-center items-center  bg-black/30"
  >
    <div class="p-8 bg-white shadow-sm rounded-md">
      <span class="text-2xl  text-yellow-950 font-bold">Add Task</span>
      <div class="mt-2">
        <span class="font-medium text-yellow-950">Title</span>
        <input
          v-model="taskForm.title"
          type="text"
          placeholder="Enter title"
          class="w-full border-2 border-yellow-900 px-2 py-1 rounded font-medium"
        />
        <span class="font-medium text-sm text-red-700">Title</span>
      </div>
      <div class="mt-2">
        <span class="font-medium text-yellow-950">Description</span>
        <textarea
          v-model="taskForm.description"
          placeholder="Enter description"
          class="w-full border-2 border-yellow-900 px-2 py-1 rounded font-medium"
        ></textarea>
        <span class="font-medium text-sm text-red-700">Title</span>
      </div>
     <div class="grid grid-cols-2">
         <div class="pr-1">
        <span class="font-medium text-yellow-950">Status</span>
        <dropdown
          v-model:currentItem="taskForm.status"
          :items="taskStatusItems"
        />
      </div>
      <div class="pl-1">
        <span class="font-medium text-yellow-950">Priority</span>
        <dropdown
          v-model:currentItem="taskForm.priority"
          :items="taskPriorityItems"
        />
      </div>
     </div>
     <div class="mt-2">
  <span class="font-medium text-yellow-950">Due date</span>
  <input
    v-model="taskForm.dueDate"
    type="date"
    class="w-full border-2 border-yellow-900 px-2 py-1 rounded font-medium"
  />
  <span class="font-medium text-sm text-red-700">Title</span>
</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import Dropdown from "./Dropdown.vue";
import { TaskPriority, TaskSort, TaskStatus } from "../enums";

interface TaskForm {
  title: string;
  description: string;
  status: TaskStatus | null;
  priority: TaskPriority | null;
  dueDate: string  | null;
}

const taskForm = reactive<TaskForm>({
  title: "",
  description: "",
  status: TaskStatus.TO_DO,
  priority: TaskPriority.LOW,
  dueDate: null,
});

const taskStatusItems = [
  TaskStatus.TO_DO,
  TaskStatus.IN_PROGRESS,
  TaskStatus.DONE,
];

const taskPriorityItems = [
  TaskPriority.LOW,
  TaskPriority.MEDIUM,
  TaskPriority.HIGH,
];
</script>

<style></style>
