import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployeesList(){
    const path='http://localhost:8080/api/path1/employee';
    return this.http.get<Employee[]>(path);
  }
}