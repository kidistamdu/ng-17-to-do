import { Injectable } from "@angular/core"
import { ComponentStore, tapResponse } from "@ngrx/component-store"
import {  delay, switchMap, tap } from "rxjs";
import { ToDoService } from "src/app/shared/services/todo.service";

export interface Tasks {
    description:string,
    id:number,
    date:string,
    priority:string,
    status:boolean
    
}
export interface ITaskState {
    loading:boolean,
    tasks:Tasks[]
 }
 
  const initialState: ITaskState = {
    tasks:[],
    loading:false
  };
  

@Injectable({  providedIn: 'root'})

export class TaskStore extends ComponentStore<ITaskState>{
   constructor(  private toDoService : ToDoService){
    super(initialState)
   }

  //read selector
  readonly loading$ = this.select((state) => state.loading)
  readonly tasks$ = this.select((state) => state.tasks)


     //write updater
     readonly setLoading = this.updater((state, loading: boolean) => {
        return {
          ...state,
          loading
        }
      })
   readonly setTasks = this.updater((state, tasks: Tasks[]) => ({
  ...state,
  tasks
    }));

   readonly updateTask = this.updater((state, tasks: Tasks ) => ({
    ...state,
    loading: false,
    tasks: [...state.tasks,tasks] 
  }));

   readonly removeTask = this.updater((state, id:number) => {
    return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== id)
    }  
     
  });



  //effect

  readonly getTasks = this.effect<void>(
    (trigger$) => trigger$.pipe(
      tap(() => this.setLoading(true)),
      switchMap(() => this.toDoService.getAllToDo().pipe(
        delay(10),
        tapResponse({
          next: tasks => this.setTasks(tasks),
          error: error => console.error(error),
          finalize: () => this.setLoading(false)
        })
      )),
    )
  )


  readonly createTask = this.effect<Tasks>(
    (tasks$) => tasks$.pipe(
        switchMap(task => this.toDoService.createTask(task).pipe(
            tapResponse({
                next: () => this.getTasks(),
                error:() =>{}
            })
        ))
    )
  )
  
 
  readonly updatedTask = this.effect<Tasks>(
    (tasks$) => tasks$.pipe(
      switchMap(task => this.toDoService.createTask(task).pipe(
        tapResponse({
          next: (createdTask: Tasks) => {
            const taskId = createdTask.id;
            return this.toDoService.updateTask(createdTask, taskId).subscribe(() => {
              this.getTasks();
            });
          },
          error: () => {
          }
        })
      ))
    )
  )
  
  readonly deleteTask = this.effect<number>(
    (id$) => id$.pipe(
      tap(id => this.removeTask(id)),
      switchMap(id => this.toDoService.deleteTask(id).pipe(
        tapResponse({
          next: () => console.log('done'),
          error: error => this.getTasks()
        })
      ))
    )
  )
  
}
