<template>
  <div class="py-10 2xl:px-80 xl:px-60 xs:px-2">
    <h1 class=" sm:text-5xl xs:text-4xl text-yellow-950">Task Management</h1>
    <TaskFilter
      class="my-10"
      v-model:status="taskFilter.status"
      v-model:priority="taskFilter.priority"
      v-model:sort="taskFilter.sort"
      v-model:sortOrder="taskFilter.sortOrder"
    />
    <CountSummary :toDo="countToDo" :inProgress="countInProgress" :done="countDone"/>
    <!-- <div class="flex justify-between">
        <h2 class="font-bold text-2xl text-yellow-950">
          Tasks {{ taskStore.tasks.length }}
        </h2>
        <button
          @click="handleOnOpanAddTaskDialog"
          class="text-white bg-yellow-900 box-border border border-transparent hover:bg-yellow-800 shadow-xs font-medium leading-5 rounded-md text-sm px-4 cursor-pointer"
        >
          Add Task
        </button>
      </div> -->

    <div class="mt-8">
      <TaskList
        v-on:onUpdateTask="handleOnOpenUpdateTaskDialog"
        v-on:onDeleteTask="handleOnOpenDeleteTaskDialog"
        v-on:onAddTask="handleOnOpanAddTaskDialog"
        :tasks="taskStore.tasks"
        :status="taskFilter.status"
        :priority="taskFilter.priority"
        :sort="taskFilter.sort"
        :sortOrder="taskFilter.sortOrder"
      />
    </div>
  </div>
  <TaskForm v-on:onAddTask="handleOnAddTask" v-model:isShow="isShow" />
  <UpdateTaskForm
    v-on:onUpdateTask="handleOnUpdateTask"
    v-model:isShow="isShowUpdate"
    :task="updateTask"
  />
  <ConfirmDeleteDialog
    v-on:onConfirm="handleonConfirmDeleteTask"
    v-model:isShow="isShowConfirmDelete"
  />
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import TaskFilter from "../components/TaskFilter.vue";
import TaskForm from "../components/TaskForm.vue";
import TaskList from "../components/TaskList.vue";
import type { AddTask, Task } from "../models";
import { useTaskStore } from "../stores";
import UpdateTaskForm from "../components/UpdateTaskForm.vue";
import ConfirmDeleteDialog from "../components/ConfirmDeleteDialog.vue";
import { TaskPriority, TaskSort, TaskSortOrder, TaskStatus } from "../enums";
import CountSummary from "../components/CountSummary.vue";

const isShow = ref<boolean>(false);
const isShowUpdate = ref<boolean>(false);
const isShowConfirmDelete = ref<boolean>(false);

const taskStore = useTaskStore();

const handleOnAddTask = (payload: AddTask) => {
  const newTask = {
    id: crypto.randomUUID(),
    title: payload.title,
    description: payload.description,
    status: payload.status,
    priority: payload.priority,
    dueDate: payload.dueDate,
  };
  taskStore.tasks.push(newTask);
  // resetTaskFilter()
};

const handleOnUpdateTask = (payload: Task) => {
  taskStore.tasks = taskStore.tasks.map((task) => {
    if (task.id == payload.id) {
      return {
        ...task,
        title: payload.title,
        description: payload.description,
        status: payload.status,
        priority: payload.priority,
        dueDate: payload.dueDate,
      };
    }
    return task;
  });
  // resetTaskFilter()
};

const updateTask = ref<Task | null>(null);
const deleteTask = ref<string | null>(null);

const handleOnOpenUpdateTaskDialog = (task: Task) => {
  updateTask.value = task;
  isShowUpdate.value = true;
};

const handleonConfirmDeleteTask = (isConfirm: boolean) => {
  if (!isConfirm) return;
  taskStore.tasks = taskStore.tasks.filter(
    (task) => task.id != deleteTask.value,
  );
  isShowConfirmDelete.value = false;
  // resetTaskFilter()
};

const handleOnOpenDeleteTaskDialog = (id: string) => {
  deleteTask.value = id;
  isShowConfirmDelete.value = true;
};

const handleOnOpanAddTaskDialog = () => {
  isShow.value = true;
};

interface TaskFilter {
  status: TaskStatus;
  priority: TaskPriority;
  sort: TaskSort;
  sortOrder: TaskSortOrder | null;
}

const taskFilter = reactive<TaskFilter>({
  status: TaskStatus.ALL,
  priority: TaskPriority.ALL,
  sort: TaskSort.ALL,
  sortOrder: null,
});

const resetTaskFilter = () => {
  taskFilter.status = TaskStatus.ALL;
  taskFilter.priority = TaskPriority.ALL;
  taskFilter.sort = TaskSort.ALL;
  taskFilter.sortOrder = null;
};

const countToDo = computed(()=>{
  let sum = 0;
  for(const task of taskStore.tasks){
    if(task.status == TaskStatus.TO_DO)sum++
  }
  return sum
})


const countInProgress= computed(()=>{
  let sum = 0;
  for(const task of taskStore.tasks){
    if(task.status == TaskStatus.IN_PROGRESS)sum++
  }
  return sum
})

const countDone = computed(()=>{
  let sum = 0;
  for(const task of taskStore.tasks){
    if(task.status == TaskStatus.DONE)sum++
  }
  return sum
})
</script>

<style></style>
