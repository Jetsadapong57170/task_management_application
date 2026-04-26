import type { TaskStatus, TaskPriority } from "../enums";

export interface Task{
    id: string;
    title: string;
    description: string,
    status: TaskStatus,
    priority: TaskPriority,
    dueDate: string,
}

export type AddTask = Omit<Task,"id"> 