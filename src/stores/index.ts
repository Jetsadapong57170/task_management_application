import { defineStore } from 'pinia'
import type { Task } from '../models'

export const useTaskStore = defineStore('task', {
  state: () => {
    return { tasks: [] as Task[] }
  },
  persist:{
    storage: localStorage
  }
})