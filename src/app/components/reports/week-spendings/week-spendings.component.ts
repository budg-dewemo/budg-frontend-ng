import { waitForAsync } from '@angular/core/testing';
import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-week-spendings',
  templateUrl: './week-spendings.component.html',
  styleUrls: ['./week-spendings.component.css']
})
export class WeekSpendingsComponent implements OnInit {
  
  @Input() chartData = {
    labels: ['Food', 'Rent' , 'Entertainment', 'Holidays', 'Clothing', 'Bills', 'Miscellaneous', 'Custom expenses'],
    data: [300, 500, 100, 400, 500, 600, 500, 700]
  }

  colors : string[] = ['#3ACE64', '#7D89F0', '#E9918C', '#FFD172', '#E88740', '#DF51C0', '#40A5E8',  '#51DFC6'];

  constructor() { }

  ngOnInit(): void {
  }

  public pieChartOptions: ChartOptions<'pie'> = {
    layout: {
      padding: {
        left: 15,
        right: 15,
        top: 0,
        bottom: 0
      }},
    responsive: true,
    maintainAspectRatio: true,
    
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
  public pieChartLabels = this.chartData.labels;
  public pieChartDatasets = [ {
    data: this.chartData.data,
    backgroundColor: this.colors,
    borderColor: this.colors,
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
 

  getChartOptions() {
    // this.pieChartDatasets.[0].data = this.chartOptions.datasets[0].data;
  }
}
