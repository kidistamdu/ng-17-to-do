import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddTaskComponent } from './layouts/body/addTask/addTask.component';
import { UpdateTaskComponent } from './layouts/body/updateTask/updateTask.component';

const routes: Routes = [

  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'create',
    title: 'create',
    component: AddTaskComponent,
  },
  {
    path: 'update/:id',
    title: 'update',
    component: UpdateTaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
