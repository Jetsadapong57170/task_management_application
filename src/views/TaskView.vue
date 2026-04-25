<template>
  <div class="py-10 xl:px-80 xs:px-2">
    <h1 class="text-5xl">Task Management</h1>
    <TaskFilter class="my-10"/>
    <div>
        <TaskList/>
    </div>
  </div>
</template>

<script setup lang="ts">
import TaskFilter from '../components/TaskFilter.vue';
import TaskList from '../components/TaskList.vue';

</script>

<style></style>
