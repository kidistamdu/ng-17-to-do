import { Tasks } from './../task.store';
import { Component } from '@angular/core';
import { ToDoService } from 'src/app/shared/services/todo.service';
import {  ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { CommonService } from 'src/app/_core/services/common.service';
import { Router, RouterLink } from '@angular/router';
import { TaskStore } from '../task.store';

@Component({
  selector: 'app-listTask',
  templateUrl: './listTask.component.html',
  styleUrls: ['./listTask.component.css'],
  standalone:true,
  imports: [FormsModule,ModalModule,NgFor,NgIf,CommonModule,RouterLink]
})
export class ListTaskComponent {

  tasks$ = this.taskStore.tasks$
  loading$ = this.taskStore.loading$

  constructor(public readonly commonService: CommonService,
              private toDoService : ToDoService,
              private router : Router,
              private readonly taskStore:TaskStore
           ) {
  }
     
  openAddComponent(){
    this.router.navigate(['/create']);
   }

   deleteTask(id: number) {
    this.taskStore.deleteTask(id);
  }

  ngOnInit(){
    this.taskStore.getTasks()
    console.log(this.taskStore.getTasks() ,'data')
  }
}
