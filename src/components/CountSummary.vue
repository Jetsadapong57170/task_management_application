<template>
  <div class="grid grid-cols-3 gap-3">
    <div class="bg-taupe-100 flex justify-center items-center flex-col p-3 rounded">
        <span class="text-yellow-950 font-medium sm:text-lg  xs:text-xs">To DO</span>
        <h1 class="text-yellow-950 font-medium text-3xl">{{props.toDo}}</h1>
    </div>
    <div class="bg-taupe-100 flex justify-center items-center flex-col  p-3 rounded">
        <span class="text-yellow-950 font-medium sm:text-lg  xs:text-xs">In Progress</span>
        <h1 class="text-yellow-950 font-medium text-3xl">{{props.inProgress}}</h1></div>
    <div class="bg-taupe-100 flex justify-center items-center flex-col  p-3 rounded">
        <span class="text-yellow-950 font-medium sm:text-lg  xs:text-xs">Done</span>
        <h1 class="text-yellow-950 font-medium text-3xl">{{props.done}}</h1></div>
  </div>
</template>

<script setup lang="ts">

interface Props {
    toDo: number;
    inProgress: number;
    done: number;
}
const props = defineProps<Props>()

</script>

<style></style>
