import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  getAllTasks(){
    const path='https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Task[]>(path);
  }
}
