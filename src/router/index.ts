import { createWebHistory, createRouter } from 'vue-router'

import TaskView from '../views/TaskView.vue'
const routes = [
  { path: '/', component: TaskView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})