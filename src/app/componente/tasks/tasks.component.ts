import { Component,  } from '@angular/core';
import { TaskService } from 'src/app/servicios/task.service';
import { Task } from 'src/model/task.module';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks:Task[]= []

  constructor(
    private taskService: TaskService
  ){}

  ngOnInit(): void {

    this.taskService.getTask().subscribe(data=>{
      this.tasks = data.result
      console.log(this.tasks)
    })
  
  }

}
