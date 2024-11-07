import { InjectionToken, Provider } from '@angular/core';

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export type TaskStatusOptions = {
  value: 'open' | 'in-progress' | 'done';
  taskStatus: TaskStatus;
  text: string;
}[];

export const TASK_STATUS_OPTIONS = new InjectionToken<TaskStatusOptions>('task-status-options');


export const taskStausOptions: TaskStatusOptions = [{
      value: 'open',
      taskStatus: 'OPEN',
      text: 'Open'
    },
    {
      value: 'in-progress',
      taskStatus: 'IN_PROGRESS',
      text: 'Working on it'
    },
    {
      value: 'done',
      taskStatus: 'DONE',
      text: 'Completed'
    }];

export const taskStatusOptionsProvider: Provider = {
  provide: TASK_STATUS_OPTIONS,
  useValue: taskStausOptions,
};

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
