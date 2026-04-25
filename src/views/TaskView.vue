<template>
  <div class="py-10 2xl:px-80 xl:px-60 xs:px-2">
    <h1 class="text-5xl text-yellow-950">Task Management</h1>
    <TaskFilter class="my-10" />
    <div>
      <div class="flex justify-between">
        <h2 class="font-bold text-2xl text-yellow-950">Tasks {{tasks.length}}</h2>
        <button
          @click="handleOnOpanAddTaskDialog"
          class="text-white bg-yellow-900 box-border border border-transparent hover:bg-yellow-800 shadow-xs font-medium leading-5 rounded-md text-sm px-4 cursor-pointer"
        >
          Add Task
        </button>
      </div>
      <TaskList  :tasks="tasks"/>
    </div>
  </div>
  <TaskForm v-on:onAddTask="handleOnAddTask" v-model:isShow="isShow" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import TaskFilter from "../components/TaskFilter.vue";
import TaskForm from "../components/TaskForm.vue";
import TaskList from "../components/TaskList.vue";
import type { AddTask, Task } from "../models";
const isShow = ref<boolean>(false);
const tasks = ref<Task[]>([]);

const handleOnAddTask = (payload: AddTask) => {
  console.log("payload", payload);
  const newTask = {
    id: crypto.randomUUID(),
    title: payload.title,
    description: payload.description,
    status: payload.status,
    priority: payload.priority,
    dueDate: payload.dueDate,
  };
  tasks.value.push(newTask)

  console.log(tasks.value)
};
const handleOnOpanAddTaskDialog = () => {
  isShow.value = true;
};
</script>

<style></style>
