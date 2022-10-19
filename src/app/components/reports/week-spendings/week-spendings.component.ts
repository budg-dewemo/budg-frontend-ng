import { waitForAsync } from '@angular/core/testing';
import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-week-spendings',
  templateUrl: './week-spendings.component.html',
  styleUrls: ['./week-spendings.component.css']
})
export class WeekSpendingsComponent implements OnInit {
  @Input() chartOptions = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
      }
    ],
  } 


  constructor() { }

  ngOnInit(): void {
  }

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
    plugins: {
      legend: {
        position: 'left',
        labels: {
          usePointStyle: true,
          color: '#615E74',
          boxWidth: 10,
          boxHeight: 10,
          font: {
            size: 15,
            family: 'Karla',
            
          }
        }
      },
      tooltip: {
        backgroundColor: '#2D2A3E',
        usePointStyle: true,
        boxHeight: 5,
        boxPadding: 5,
        bodyFont: {
          family: 'Inconsolata'
        },
        callbacks: {
          labelTextColor: function(context) {
            return 'white';
          }
      }
      
    }
  }
}
  public pieChartLabels = [ 'Food', 'Rent' , 'Entertainment', 'Holidays', 'Clothing', 'Bills', 'Miscellaneous', 'Custom expenses'];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100, 400, 500, 600, 500, 700],
    backgroundColor: [ '#3ACE64', '#7D89F0', '#E9918C', '#FFD172', '#E88740', '#DF51C0', '#40A5E8',  '#51DFC6'],
    borderColor: [ '#3ACE64', '#7D89F0', '#E9918C', '#FFD172', '#E88740', '#DF51C0', '#40A5E8',  '#51DFC6'],
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
 

}
