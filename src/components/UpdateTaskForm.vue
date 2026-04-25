<template>
  <div
    class="absolute top-0 min-h-screen w-full z-100 flex justify-center items-center bg-black/30"
    v-show="props.isShow"
  >
    <div class="p-8 bg-white shadow-sm rounded-md max-w-[350px] min-w-[350px]">
      <div class="flex justify-between">
        <span class="text-2xl text-yellow-950 font-bold">Update Task</span>
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          @click="handleOnCloseUpdateTaskDialog"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18 17.94 6M18 18 6.06 6"
          />
        </svg>
      </div>

      <div class="mt-2">
        <span class="font-medium text-yellow-950">Title</span>
        <input
          v-model="taskForm.title"
          type="text"
          placeholder="Enter title"
          class="w-full border-2 border-yellow-900 px-2 py-1 rounded font-medium"
        />
        <span
          v-if="taskFormError.title != null"
          class="font-medium text-sm text-red-700"
          >{{ taskFormError.title }}</span
        >
      </div>
      <div class="mt-2">
        <span class="font-medium text-yellow-950">Description</span>
        <textarea
          v-model="taskForm.description"
          placeholder="Enter description"
          class="w-full border-2 border-yellow-900 px-2 py-1 rounded font-medium"
        ></textarea>
        <span
          v-if="taskFormError.description != null"
          class="font-medium text-sm text-red-700"
          >{{ taskFormError.description }}</span
        >
      </div>
      <div class="grid grid-cols-2">
        <div class="pr-1">
          <span class="font-medium text-yellow-950">Status</span>
          <dropdown
            v-model:currentItem="taskForm.status"
            :items="taskStatusItems"
          />
        </div>
        <div class="pl-1">
          <span class="font-medium text-yellow-950">Priority</span>
          <dropdown
            v-model:currentItem="taskForm.priority"
            :items="taskPriorityItems"
          />
        </div>
      </div>
      <div class="mt-2">
        <span class="font-medium text-yellow-950">Due date</span>
        <input
          v-model="taskForm.dueDate"
          type="date"
          class="w-full border-2 border-yellow-900 px-2 py-1 rounded font-medium cursor-pointer"
        />
        <span
          v-if="taskFormError.dueDate != null"
          class="font-medium text-sm text-red-700"
          >{{ taskFormError.dueDate }}</span
        >
      </div>
      <button
        class="text-white w-full py-2.5 mt-2 bg-yellow-900 box-border border border-transparent hover:bg-yellow-800 shadow-xs font-medium leading-5 rounded-md text-sm cursor-pointer"
        @click="handleOnUpdateTaskClick"
      >
        Update Task
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, watch } from "vue";
import Dropdown from "./Dropdown.vue";
import { TaskPriority, TaskSort, TaskStatus } from "../enums";
import type { Task } from "../models";

interface Props {
    isShow: boolean;
    task: Task | null;
}
const props = defineProps<Props>()


interface TaskFormError {
  title: string | null;
  description: string | null;
  dueDate: string | null;
}

const taskForm = reactive<Task>({
    id: "",
  title: "",
  description: "",
  status: TaskStatus.TO_DO,
  priority: TaskPriority.LOW,
  dueDate: "",
});

const taskFormError = reactive<TaskFormError>({
  title: null,
  description: null,
  dueDate: null,
});

const taskStatusItems = [
  TaskStatus.TO_DO,
  TaskStatus.IN_PROGRESS,
  TaskStatus.DONE,
];

const taskPriorityItems = [
  TaskPriority.LOW,
  TaskPriority.MEDIUM,
  TaskPriority.HIGH,
];

const emit = defineEmits(["onUpdateTask", "update:isShow" ]);

    const proxyIsShow = computed({
        get:()=>props.isShow,
        set:(value)=> emit("update:isShow", value) ,
    })

const validateTaskForm = () => {
  if (taskForm.title == "") {
    taskFormError.title = "Please fill task title";
    return false;
  } else {
    taskFormError.title = null;
  }
  if (taskForm.description == "") {
    taskFormError.description = "Please fill task description";
    return false;
  } else {
    taskFormError.description = null;
  }
  if (taskForm.dueDate == "") {
    taskFormError.dueDate = "Please select task due date";
    return false;
  } else {
    taskFormError.dueDate = null;
  }
  return true;
};

const handleOnCloseUpdateTaskDialog = () =>{
    proxyIsShow.value = false
    resetForm()
}

const resetForm = () =>{
    taskForm.title = ""
    taskForm.description = ""
    taskForm.status = TaskStatus.TO_DO
    taskForm.priority = TaskPriority.LOW
    taskForm.dueDate = ""
}

const handleOnUpdateTaskClick = () => {
  const isValid = validateTaskForm();
  if (!isValid) return;

  const payload = {
    id: taskForm.id,
    title: taskForm.title,
    description: taskForm.description,
    status: taskForm.status,
    priority: taskForm.priority,
    dueDate: taskForm.dueDate,
  };
  emit("onUpdateTask", payload);
  handleOnCloseUpdateTaskDialog()
};

watch(()=> props.isShow, (newValue)=>{
 if(newValue){
    taskForm.id = props.task?.id ?? ""
    taskForm.title = props.task?.title ?? ""
     taskForm.description = props.task?.description ?? ""
     taskForm.status = props.task?.status ?? TaskStatus.TO_DO
      taskForm.priority = props.task?.priority ?? TaskPriority.LOW
      taskForm.dueDate = props.task?.dueDate ?? ""
 }
})
</script>

<style></style>
