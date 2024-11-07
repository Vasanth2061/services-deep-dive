import { inject, Injectable,signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";
import { LoggingService } from "../logging.service";

// @Injectable({
//   providedIn: 'root'
// })
export class TasksService {
  tasks = signal<Task[]>([]);

  loggingService = inject(LoggingService);

  allTasks = this.tasks.asReadonly();

  addTask(taskData:{title:string,description:string}){
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN'
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
    this.loggingService.log(`Task with title ${newTask.title} was added`);
  }

  updateTaskStatus(taskId:string,newStatus:TaskStatus) {
    this.tasks.update((oldTasks) => oldTasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          status: newStatus
        };
      }
      return task;
    }));
    this.loggingService.log(`Task with id ${taskId} was updated with status ${newStatus}`);
  }
}