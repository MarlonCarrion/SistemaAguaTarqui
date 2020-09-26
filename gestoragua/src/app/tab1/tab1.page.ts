import { Component } from '@angular/core';
import { Chart } from "chart.js";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() { }
  ngOnInit() {
    this.showChartBar();
    this.showChartComparativa();
  }
  showChartBar() {
    var ctx = (<any>document.getElementById('myChart')).getContext('2d');
    var chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
        datasets: [{
          label: "Consumo Agua Potable",
          data: [10,20,30,40,50],
          backgroundColor: [
            'rgb(255, 0, 0)',
            'rgb(0, 0, 255)',
            'rgb(60, 179, 113)',
            'rgb(255, 165, 0)',
            'rgb(106, 90, 205)'
          ]
        }]
      }
    });
  }
  showChartComparativa(){
    var ctx = (<any>document.getElementById('myChart2')).getContext('2d');
    var chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ["Mayo"],
        datasets: [{
          label: "Consumo",
          data: [10],
          backgroundColor: [
            'rgb(255, 0, 0)'
          ]
        }]
      }
    });
  }
}
