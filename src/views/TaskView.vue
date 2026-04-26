<template>
  <div class="py-10 2xl:px-80 xl:px-60 xs:px-2">
    <h1 class="sm:text-5xl xs:text-4xl text-yellow-950">Task Management</h1>
    <TaskFilter class="my-10" />
    <CountSummary />

    <div class="mt-8">
      <TaskList />
    </div>
  </div>
  <TaskForm />
  <UpdateTaskForm />
  <ConfirmDeleteDialog />
</template>

<script setup lang="ts">
import TaskFilter from "../components/TaskFilter.vue";
import TaskForm from "../components/TaskForm.vue";
import TaskList from "../components/TaskList.vue";
import UpdateTaskForm from "../components/UpdateTaskForm.vue";
import ConfirmDeleteDialog from "../components/ConfirmDeleteDialog.vue";
import CountSummary from "../components/CountSummary.vue";
</script>

<style></style>
