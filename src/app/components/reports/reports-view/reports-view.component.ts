import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-reports-view',
  templateUrl: './reports-view.component.html',
  styleUrls: ['./reports-view.component.css']
})
export class ReportsViewComponent implements OnInit {

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
          color: '#2D2A3E',
          boxWidth: 10,
          boxHeight: 10,
          font: {
            size: 15,
            family: 'Karla'
          }
        }
      },
      tooltip: {
        backgroundColor: '#2D2A3E',
        bodyFont: {
          family: 'Karla'
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
    borderColor: [ '#F3F5F7'],
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
 

}

