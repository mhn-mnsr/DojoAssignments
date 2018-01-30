import { Task } from './../task';
import { TaskService } from './../task.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
  newTask: Task = new Task();

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
  }

  onSubmit(task: Task) {
    this._taskService.createTask(this.newTask);
    this.newTask = new Task();
  }

}
