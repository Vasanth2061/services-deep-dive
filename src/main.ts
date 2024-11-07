import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { InjectionToken } from '@angular/core';
import { TasksService } from './app/tasks/tasks.service';

export const taskServiceTkoen = new InjectionToken<TasksService>('tasks-service-token');

bootstrapApplication(AppComponent, {
  providers: [{provide: taskServiceTkoen, useClass:TasksService}]
}).catch((err) => console.error(err));
