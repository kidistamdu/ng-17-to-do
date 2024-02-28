import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {Injectable} from "@angular/core";
import { tapResponse } from "@ngrx/component-store";
import { Observable, catchError, map, tap, throwError } from "rxjs";
import { Tasks } from "src/app/public/layouts/body/task.store";


@Injectable({providedIn: "root"})

export class ToDoService{
    constructor(private http: HttpClient) {}
    private apiUrl = 'http://localhost:3000/tasks';


    getAllToDo(): Observable<Tasks[]> {
      return this.http.get<Tasks[]>(this.apiUrl) 
        .pipe(
          map(res => res), 
          catchError(this.handleError)
        );
    }
     
      createTask(body:Tasks):Observable<Tasks>{
        return this.http.post<Tasks>(this.apiUrl, body).pipe(
          tapResponse({
            next: (res)=> res,
            error:(e)=> e
          }),
            catchError(this.handleError)
        )
      }
      updateTask(body: Tasks, id: number): Observable<Tasks> {
        return this.http.put<Tasks>(`${this.apiUrl}/${id}`, body).pipe(
          tap((res: Tasks) => {
            console.log('Task updated:', res);
          }),
          catchError(this.handleError)
        );
      }

      deleteTask(id: number): Observable<Tasks> {
        return this.http.delete<Tasks>(`${this.apiUrl}/${id}`)
          .pipe(
            catchError(error => {
              console.error('Error deleting task:', error);
              return throwError(error);
            })
          );}
      
      private handleError({ status }: HttpErrorResponse) {
        return throwError(
          () => `${status}: Something bad happened.`
        );
      }

}
