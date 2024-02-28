import { Component } from '@angular/core';
import { ToDoService } from 'src/app/shared/services/todo.service';
import {  ModalModule } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { CommonService } from 'src/app/_core/services/common.service';
import { TaskStore, Tasks } from '../task.store';

@Component({
  selector: 'app-addTask',
  templateUrl: './addTask.component.html',
  styleUrls: ['./addTask.component.css'],
  standalone:true,
  imports: [FormsModule,ModalModule,NgFor,NgIf]
})
export class AddTaskComponent {
  modalRef: any;
  taskDescription : Omit<Tasks,'id'>  =  {
    date:"",
   description:"",
    priority:"",
   status:false,
}
  constructor(public readonly commonService: CommonService,
              private taskStore:TaskStore,
           ) {

  }

  createTask(){
    this.taskStore.createTask({...this.taskDescription,id:2})
   }
   
  ngOnInit(){
   
  }
}
