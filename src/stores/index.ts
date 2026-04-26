import { defineStore } from "pinia";
import type { AddTask, Task } from "../models";
import { TaskPriority, TaskSort, TaskSortOrder, TaskStatus } from "../enums";

const priorityOrder: Record<TaskPriority, number> = {
  [TaskPriority.ALL]: 0,
  [TaskPriority.LOW]: 1,
  [TaskPriority.MEDIUM]: 2,
  [TaskPriority.HIGH]: 3,
};

export const useTaskStore = defineStore("task", {
  state: () => ({
    tasks: [] as Task[],
    isShowAdd: false,
    isShowUpdate: false,
    isShowConfirmDelete: false,
    targetTask: null as Task | null,
    status: TaskStatus.ALL,
    priority: TaskPriority.ALL,
    sort: TaskSort.ALL,
    sortOrder: null as TaskSortOrder | null,
  }),
  getters: {
    filteredTasks: (state) => {
      let tempFilteredTasks = state.tasks.filter(
        (task) =>
          (state.status == TaskStatus.ALL
            ? true
            : task.status == state.status) &&
          (state.priority == TaskPriority.ALL
            ? true
            : task.priority == state.priority),
      );
      if (
        state.sort == TaskSort.DUE_DATE &&
        state.sortOrder == TaskSortOrder.DESC_DUE_DATE
      ) {
        tempFilteredTasks.sort((a, b) => {
          return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
        });
      } else if (
        state.sort == TaskSort.DUE_DATE &&
        state.sortOrder == TaskSortOrder.ASC_DUE_DATE
      ) {
        tempFilteredTasks.sort((a, b) => {
          return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        });
      } else if (
        state.sort == TaskSort.PRIORITY &&
        state.sortOrder == TaskSortOrder.DESC_PRIORITY
      ) {
        tempFilteredTasks.sort(
          (a, b) => priorityOrder[b.priority] - priorityOrder[a.priority],
        );
      } else if (
        state.sort == TaskSort.PRIORITY &&
        state.sortOrder == TaskSortOrder.ASC_PRIORITY
      ) {
        tempFilteredTasks.sort(
          (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority],
        );
      }
      return tempFilteredTasks;
    },
  },
  actions: {
    addTask(payload: AddTask) {
      const newTask = {
        id: crypto.randomUUID(),
        title: payload.title,
        description: payload.description,
        status: payload.status,
        priority: payload.priority,
        dueDate: payload.dueDate,
      };
      this.tasks.push(newTask);
    },
    updateTask(payload: Task) {
      this.tasks = this.tasks.map((task) => {
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
    },
    deleteTask() {
      this.tasks = this.tasks.filter((task) => task.id != this.targetTask?.id);
      console.log('this.targetTask?.id', this.targetTask?.id)
      console.log('this.tasks', this.tasks)
    },
  },
  persist: {
    storage: localStorage,
    pick: ['tasks'],
  },
});
