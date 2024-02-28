import { Component, TemplateRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonService } from 'src/app/_core/services/common.service';
import { Images } from 'src/assets/data/images';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ToDoService } from 'src/app/shared/services/todo.service';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from '../body/addTask/addTask.component';

@Component({
    selector: 'public-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [RouterLink,FormsModule,ModalModule,AddTaskComponent]
})
export class PublicHeaderComponent {
  public mainLogo: string = Images.mainLogo;

  modalRef: any;
  taskDescription = {
    date:"",
   description:"",
    priority:"",
   status:"",
     id:""
}

  constructor(public readonly commonService: CommonService,
    private modalService : BsModalService,
    private toDoService :ToDoService,
  ) {}

    openModal(template: TemplateRef<any>){ 
    this.modalRef  = this.modalService.show(template)
  }
  // createTask(){
  //   this.toDoService.createTask(this.taskDescription).subscribe(data => {
  //      console.log(data,'cretae')
  //   })
  //  }
  
   
}
