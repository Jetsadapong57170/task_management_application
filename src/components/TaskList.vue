<template>
  <div class="flex justify-between">
    <h2 class="font-bold text-2xl text-yellow-950">
      Tasks {{ filteredTasks.length }}
    </h2>
    <button
      @click="handleOnAddTask"
      class="text-white bg-yellow-900 box-border border border-transparent hover:bg-yellow-800 shadow-xs font-medium leading-5 rounded-md text-sm px-4 cursor-pointer"
    >
      Add Task
    </button>
  </div>
  <div
    class="bg-taupe-100 w-full py-6 px-2 space-y-4 rounded-md mt-2  overflow-y-auto"
  >
    <div class="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-3">
      <TaskItem
        v-for="task of filteredTasks"
        :key="task.id"
        :task="task"
        @click="handleOnUpdateTask(task)"
        v-on:onDeleteTask="handleOnDeleteTask(task.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { TaskPriority, TaskSort, TaskSortOrder, TaskStatus } from "../enums";
import type { Task } from "../models";
import TaskItem from "./TaskItem.vue";

interface Props {
  tasks: Task[];
  status: TaskStatus;
  priority: TaskPriority;
  sort: TaskSort;
  sortOrder: TaskSortOrder | null;
}

const props = defineProps<Props>();

const filteredTasks = ref<Task[]>([]);

const emit = defineEmits(["onUpdateTask", "onDeleteTask", "onAddTask"]);

const handleOnUpdateTask = (task: Task) => {
  emit("onUpdateTask", task);
};

const handleOnDeleteTask = (id: string) => {
  emit("onDeleteTask", id);
};

const handleOnAddTask = () => {
  emit("onAddTask");
};

const filterTasks = () => {
  filteredTasks.value = props.tasks.filter(
    (task) =>
      (props.status == TaskStatus.ALL ? true : task.status == props.status) &&
      (props.priority == TaskPriority.ALL
        ? true
        : task.priority == props.priority),
  );
};

type TaskPriorityOrder = {
  id: number
  priority: TaskPriority
}
const priorityOrder: Record<TaskPriority, number> = {
  [TaskPriority.ALL]: 0,
  [TaskPriority.LOW]: 1,
  [TaskPriority.MEDIUM]: 2,
  [TaskPriority.HIGH]: 3
}

const sortTasks = () => {
  if (
    props.sort == TaskSort.DUE_DATE &&
    props.sortOrder == TaskSortOrder.DESC_DUE_DATE
  ) {
    filteredTasks.value.sort((a, b) => {
      return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
    });
  } else if (
    props.sort == TaskSort.DUE_DATE &&
    props.sortOrder == TaskSortOrder.ASC_DUE_DATE
  ) {
    filteredTasks.value.sort((a, b) => {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    });
  } else if (
    props.sort == TaskSort.PRIORITY &&
    props.sortOrder == TaskSortOrder.DESC_PRIORITY
  ) {
    filteredTasks.value.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
  } else if (
    props.sort == TaskSort.PRIORITY &&
    props.sortOrder == TaskSortOrder.ASC_PRIORITY
  ) {
   filteredTasks.value.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  }
  else{
    filterTasks()
  }

};

watch(
  () => props.tasks,
  () => {
    filterTasks();
  },
  { deep: true },
);

watch(
  () => props.status,
  () => {
    filterTasks();
  },
);

watch(
  () => props.priority,
  () => {
    filterTasks();
  },
);

watch(
  () => props.sort,
  () => {
    sortTasks();
  },
);

watch(
  () => props.sortOrder,
  (newValue) => {
    if(newValue == null) return
    sortTasks();
  },
);

onMounted(() => {
  filteredTasks.value = props.tasks;
});
</script>

<style></style>
