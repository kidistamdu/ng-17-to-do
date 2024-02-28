import { TaskStore } from './../task.store';
import { Component, Input } from '@angular/core';
import { ToDoService } from 'src/app/shared/services/todo.service';
import {  ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { CommonService } from 'src/app/_core/services/common.service';
import { Tasks } from '../task.store';

@Component({
  selector: 'app-updateTask',
  templateUrl: './updateTask.component.html',
  styleUrls: ['./updateTask.component.css'],
  standalone:true,
  imports: [FormsModule,ModalModule,NgFor,NgIf]
})
export class UpdateTaskComponent {
  modalRef: any;
 
  taskDescription :Tasks  =  {
    date:"",
   description:"",
    priority:"",
   status:false,
   id:1
}

  constructor(public readonly commonService: CommonService,
              private taskStore : TaskStore
           ) {
  }

  updateTask() {
    this.taskStore.updateTask(this.taskDescription);
  }

  ngOnInit(){
  }
}
