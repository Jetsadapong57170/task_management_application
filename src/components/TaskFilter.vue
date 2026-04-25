<template>
  <div class="bg-taupe-100 w-full rounded-md p-3 shadow-sm">
    <div class="xs:grid xs:grid-cols-1 md:flex ">
      <div >
        <span class="font-medium">Status</span>
        <dropdown
          v-model:currentItem="taskFilter.status"
          :items="taskStatusItems"
        />
      </div>
      <div class="md:ml-3 xs:mt-2 md:mt-0" >
        <span class="font-medium">Priority</span>
        <dropdown
          v-model:currentItem="taskFilter.priority"
          :items="taskPriorityItems"
        />
      </div>
        <div class="md:ml-3 xs:mt-2 md:mt-0" >
        <span class="font-medium">Sort by</span>
        <dropdown
          v-model:currentItem="taskFilter.sort"
          :items="taskSortItems"
        />
      </div>
      <div class="md:ml-3 xs:mt-2 md:mt-0" v-if="taskFilter.sort != TaskSort.ALL">
        <span class="font-medium">Order</span>
        <dropdown
          v-model:currentItem="taskFilter.sortOrder"
          :items="taskSortOrderItems"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import Dropdown from "./Dropdown.vue";
import { TaskPriority, TaskStatus, TaskSort, TaskSortOrder} from "../enums";

interface TaskFilter {
  status: TaskStatus;
  priority: TaskPriority;
  sort: TaskSort;
  sortOrder: TaskSortOrder | null;
}
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

const taskSortItems = [
  TaskSort.ALL,
  TaskSort.DUE_DATE,
  TaskSort.PRIORITY,
];

const taskSortOrderItems = ref<TaskSortOrder[]>([])

const taskFilter = reactive<TaskFilter>({
  status: TaskStatus.ALL,
  priority: TaskPriority.ALL,
  sort: TaskSort.ALL,
  sortOrder: null,
});


watch(()=> taskFilter.sort, (newValue)=>{
  if(newValue == TaskSort.DUE_DATE){
    taskSortOrderItems.value = [TaskSortOrder.DESC_DUE_DATE,TaskSortOrder.ASC_DUE_DATE]
    taskFilter.sortOrder = TaskSortOrder.DESC_DUE_DATE
  }else if(newValue == TaskSort.PRIORITY){
    taskSortOrderItems.value = [TaskSortOrder.DESC_PRIORITY,TaskSortOrder.ASC_PRIORITY]
    taskFilter.sortOrder = TaskSortOrder.DESC_PRIORITY
  }

})
</script>

<style></style>
