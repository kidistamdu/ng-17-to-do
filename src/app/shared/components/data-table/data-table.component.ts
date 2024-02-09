import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ModalModule } from '../modal/modal.module';

@Component({
  selector: 'data-table',
  standalone: true,
  imports: [NgClass, NgIf, ModalModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class DataTableComponent {
  showModal: boolean = false;

  modalComponent: ModalComponent
  @Input() tasks: any = [];

  constructor() {
    this.modalComponent = new ModalComponent();
  }

  openModal() {
    this.showModal = !this.showModal;
  }
  onModalCloseHandler(event: boolean) {
    this.showModal = event;
  }

  
  ngOnInIt(){
  
    
  }
}
