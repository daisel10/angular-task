import { Component,Input } from '@angular/core';

import { Task } from 'src/model/task.module';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() 
  task: Task= {
    id:0,
    task:'hola'
  }

}
