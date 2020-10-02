import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../Employee.service';
import { HttpClientModule } from "@angular/common/http";

import { TaskService } from '../services/task.service';
import { Task } from "../task";

@Component({
  selector: 'app-crud-consumidor',
  templateUrl: './crud-consumidor.page.html',
  styleUrls: ['./crud-consumidor.page.scss'],
})
export class CrudConsumidorPage implements OnInit {


  tasks: Task[]=[];

  employees: Employee[]=[];

  telefono_model: string = "";
  private isDisabledTelefono: boolean = true;
  private isDisabledMovil: boolean = true;
  private isDisabledCorreo: boolean = true;

  constructor(private router: Router, 
    private taskService:TaskService,
    private employeeService:EmployeeService) { }

  ngOnInit() {
    this.taskService.getAllTasks()
    .subscribe(tasks=>{
      this.tasks=tasks;
    });
    
    this.employeeService.getEmployeesList()
    .subscribe(employees=>{
      this.employees=employees;
    });         
  }

  getAllTasks(){
    this.taskService.getAllTasks()
    .subscribe(tasks=>{
      console.log(tasks);
    })
  }

  habilitarTelefono() {
    this.isDisabledTelefono = false;
  }
  habilitarMovil() {
    this.isDisabledMovil = false;
  }
  habilitarCorreo() {
    this.isDisabledCorreo = false;
  }
  cancelarActualizar() {
    return this.router.navigateByUrl('/tabs');
  }
}
