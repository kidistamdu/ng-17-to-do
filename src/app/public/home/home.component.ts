import { Component } from '@angular/core';
import {  ModalModule } from 'ngx-bootstrap/modal';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { ListTaskComponent } from '../layouts/body/listTask/listTask.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:true,
  imports: [RouterLink,FormsModule,ModalModule,NgFor,NgIf,ListTaskComponent]
})
export class HomeComponent {
 
  ngOnInit(){

  }
}
