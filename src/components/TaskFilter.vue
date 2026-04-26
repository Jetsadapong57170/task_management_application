<template>
  <div class="bg-taupe-100 w-full rounded-md p-3 shadow-sm">
    <div class="xs:grid xs:grid-cols-1 md:flex">
      <div>
        <span class="font-medium">Status</span>
        <dropdown
          v-model:currentItem="taskStore.status"
          :items="taskStatusItems"
        />
      </div>
      <div class="md:ml-3 xs:mt-2 md:mt-0">
        <span class="font-medium">Priority</span>
        <dropdown
          v-model:currentItem="taskStore.priority"
          :items="taskPriorityItems"
        />
      </div>
      <div class="md:ml-3 xs:mt-2 md:mt-0">
        <span class="font-medium">Sort by</span>
        <dropdown v-model:currentItem="taskStore.sort" :items="taskSortItems" />
      </div>
      <div
        class="md:ml-3 xs:mt-2 md:mt-0"
        v-if="taskStore.sort != TaskSort.ALL"
      >
        <span class="font-medium">Order</span>
        <dropdown
          v-model:currentItem="taskStore.sortOrder"
          :items="taskSortOrderItems"
        />
      </div>
      <div class=" flex items-end xs:mt-4 md:ml-3 ">
        <button
          @click="resetFilter"
          class="text-white md:w-fit xs:w-full  px-2 py-2.5  bg-yellow-700 box-border border border-transparent hover:bg-red-800 shadow-xs font-medium leading-5 rounded-md text-sm cursor-pointer"
        >
          Clear Filter
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import Dropdown from "./Dropdown.vue";
import { TaskPriority, TaskStatus, TaskSort, TaskSortOrder } from "../enums";
import { useTaskStore } from "../stores";

const taskStatusItems = [
  TaskStatus.ALL,
  TaskStatus.TO_DO,
  TaskStatus.IN_PROGRESS,
  TaskStatus.DONE,
];

const taskPriorityItems = [
  TaskPriority.ALL,
  TaskPriority.LOW,
  TaskPriority.MEDIUM,
  TaskPriority.HIGH,
];

const taskSortItems = [TaskSort.ALL, TaskSort.DUE_DATE, TaskSort.PRIORITY];

const taskSortOrderItems = ref<TaskSortOrder[]>([]);

const taskStore = useTaskStore();

const resetFilter = () => {
  taskStore.status = TaskStatus.ALL;
  taskStore.priority = TaskPriority.ALL;
  taskStore.sort = TaskSort.ALL;
  taskStore.sortOrder = null;
};

watch(
  () => taskStore.sort,
  (newValue) => {
    if (newValue == TaskSort.DUE_DATE) {
      taskSortOrderItems.value = [
        TaskSortOrder.DESC_DUE_DATE,
        TaskSortOrder.ASC_DUE_DATE,
      ];
      taskStore.sortOrder = TaskSortOrder.DESC_DUE_DATE;
    } else if (newValue == TaskSort.PRIORITY) {
      taskSortOrderItems.value = [
        TaskSortOrder.DESC_PRIORITY,
        TaskSortOrder.ASC_PRIORITY,
      ];
      taskStore.sortOrder = TaskSortOrder.DESC_PRIORITY;
    }
  },
);
</script>

<style></style>
