import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
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

  ci = "0106207038";

  tasks: Task[] = [];

  employees: Employee[] = [];

  correo_model: string = "cristian.saquipay.est@tecazuay.edu.ec";
  telefono_model: string = "2154165";
  movil_model: string = "545646"

  myValue: String = "";

  private isDisabledTelefono: boolean = true;
  private isDisabledMovil: boolean = true;
  private isDisabledCorreo: boolean = true;

  constructor(private router: Router,
    private taskService: TaskService,
    private employeeService: EmployeeService,
    private alertController: AlertController) { }

  ngOnInit() {
    this.taskService.getAllTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
      });

    this.employeeService.getEmployeesList()
      .subscribe(employees => {
        this.employees = employees;
      });
  }

  getAllTasks() {
    this.taskService.getAllTasks()
      .subscribe(tasks => {
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
  salir() {
    return this.router.navigateByUrl('/tabs');
  }
  async presentAlertCorreo() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Desea actualizar el correo electrónico?',
      inputs: [{ type: 'email', name: 'editCorreo', placeholder: 'Correo Electrónico' }],
      buttons: [
        {
          text: 'Cancelar', role: 'cancel'
        },
        {
          text: 'Actualizar', handler: data => { this.refreshCorreo(data.editCorreo); }
        }]
    });

    await alert.present();
  }
  async presentAlertMovil() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      
      header: 'Desea actualizar su número de teléfono móvil?',
      inputs: [{ name: 'editMovil', placeholder: 'Teléfono Movil' }],
      buttons: [{
        text: 'Cancelar', role: 'cancel'
      },
      {
        text: 'Actualizar', handler: data => {
          this.refreshMovil(data.editMovil);
        }
      }
      ]
      
    });

    await alert.present();
  }

  async presentAlertTelefono() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Desea actualizar su número de teléfono fijo?',
      inputs: [{ name: 'editTelefono', placeholder: 'Teléfono Fijo' }],
      buttons: [{ text: 'Cancelar', role: 'cancel' },
      {
        text: 'Actualizar', handler: data => {
          this.refreshTelefono(data.editTelefono);
        }
      }]
    });
    await alert.present();
  }
  refreshTelefono(editTelefono: any) {
    this.telefono_model = editTelefono;
  }
  refreshMovil(editMovil: any) {
    this.movil_model = editMovil;
  }
  refreshCorreo(editCorreo: any) {
    this.correo_model = editCorreo;
  }
}
