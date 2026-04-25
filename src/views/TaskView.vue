<template>
  <div class="py-10 2xl:px-80 xl:px-60 xs:px-2">
    <h1 class="text-5xl text-yellow-950">Task Management</h1>
    <TaskFilter class="my-10"/>
    <div>
        <TaskList/>
    </div>
  </div>
  <TaskForm/>
</template>

<script setup lang="ts">
import TaskFilter from '../components/TaskFilter.vue';
import TaskForm from '../components/TaskForm.vue';
import TaskList from '../components/TaskList.vue';

</script>

<style></style>
