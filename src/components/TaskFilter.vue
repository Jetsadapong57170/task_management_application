<template>
  <div class="bg-taupe-100 w-full rounded-md p-3 shadow-sm">
    <div class="xs:grid xs:grid-cols-1 md:flex">
      <div>
        <span class="font-medium">Status</span>
        <dropdown
          v-model:currentItem="proxyStatus"
          :items="taskStatusItems"
        />
      </div>
      <div class="md:ml-3 xs:mt-2 md:mt-0">
        <span class="font-medium">Priority</span>
        <dropdown
          v-model:currentItem="proxyPriority"
          :items="taskPriorityItems"
        />
      </div>
      <div class="md:ml-3 xs:mt-2 md:mt-0">
        <span class="font-medium">Sort by</span>
        <dropdown
          v-model:currentItem="proxySort"
          :items="taskSortItems"
        />
      </div>
      <div
        class="md:ml-3 xs:mt-2 md:mt-0"
        v-if="proxySort != TaskSort.ALL"
      >
        <span class="font-medium">Order</span>
        <dropdown
          v-model:currentItem="proxySortOrder"
          :items="taskSortOrderItems"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from "vue";
import Dropdown from "./Dropdown.vue";
import { TaskPriority, TaskStatus, TaskSort, TaskSortOrder } from "../enums";

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


interface Props {
  status: TaskStatus;
  priority: TaskPriority;
  sort: TaskSort;
  sortOrder: TaskSortOrder | null;
}
const props = defineProps<Props>();

const emit = defineEmits([
  "update:status",
  "update:priority",
  "update:sort",
  "update:sortOrder",
]);

const proxyStatus = computed({
  get: () => props.status,
  set: (value) => emit("update:status", value),
});

const proxyPriority = computed({
  get: () => props.priority,
  set: (value) => emit("update:priority", value),
});

const proxySort = computed({
  get: () => props.sort,
  set: (value) => emit("update:sort", value),
});

const proxySortOrder = computed({
  get: () => props.sortOrder,
  set: (value) => emit("update:sortOrder", value),
});

watch( proxySort,
  (newValue) => {
    if (newValue == TaskSort.DUE_DATE) {
      taskSortOrderItems.value = [
        TaskSortOrder.DESC_DUE_DATE,
        TaskSortOrder.ASC_DUE_DATE,
      ];
      proxySortOrder.value = TaskSortOrder.DESC_DUE_DATE;
    } else if (newValue == TaskSort.PRIORITY) {
      taskSortOrderItems.value = [
        TaskSortOrder.DESC_PRIORITY,
        TaskSortOrder.ASC_PRIORITY,
      ];
      proxySortOrder.value = TaskSortOrder.DESC_PRIORITY;
    }
  },
);
</script>

<style></style>
