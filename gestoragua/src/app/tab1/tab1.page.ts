import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Chart } from "chart.js";
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router:Router, private alertCtrl:AlertController) { }
  ngOnInit() {
    this.showChartBar();
    this.showChartComparativa();
  }
  gotoCrud(){
    return this.router.navigateByUrl('/crud-consumidor');
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      cssClass: 'alertDanger',
      header: 'Valores Pendientes',
      subHeader: 'Meses pendientes: 1',
      message: 'Tiene una deuda de: $10.50',
      buttons: [{text:'Salir', role:'cancel'}]
    });

    await alert.present();
  }

  showChartBar() {
    var ctx = (<any>document.getElementById('myChart')).getContext('2d');
    var chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
        datasets: [{
          label: "Consumo Últimos 6 meses",
          data: [10,20,30,40,50],
          backgroundColor: [
            'rgba(0,255,255,0.7)',
            'rgba(0,255,255,0.7)',
            'rgba(0,255,255,0.7)',
            'rgba(0,255,255,0.7)',
            'rgba(0,255,255,0.7)'
          ]
        }]
      }, 
      options:{
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
      }
    });
  }
  showChartComparativa(){
    var ctx = (<any>document.getElementById('myChart2')).getContext('2d');
    var chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Comunidad", "Fmla Saquipay"],
        datasets: [{
          label: "Consumo Referencial",
          data: [11, 15],
          backgroundColor: [
            'rgba(0,255,255,0.7)',
            'rgba(0,255,255,0.7)'
          ]
        }]
      }, 
      options:{
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
      }
    });
  }
}
