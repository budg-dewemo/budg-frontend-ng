import { ReportService } from './../../../services/report.service';
import { waitForAsync } from '@angular/core/testing';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-week-spendings',
  templateUrl: './week-spendings.component 2.html',
  styleUrls: ['./week-spendings.component.css']
})
export class WeekSpendingsComponent implements OnInit {

  

  isDataLoaded: boolean = false;

  colors : string[] = ['#3ACE64', '#7D89F0', '#E9918C', '#FFD172', '#E88740', '#DF51C0', '#40A5E8',  '#51DFC6'];
  

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.getChartData();
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
        position: window.innerWidth > 600 ? 'right' : 'bottom',
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
  public pieChartLabels = [];
  public pieChartDatasets = [ {
    data: [],
    backgroundColor: this.colors,
    borderColor: this.colors,
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
 

  getChartData() {
    this.reportService.getCategoryReport().subscribe((data: any) => {
      console.log('data', data);    
      this.pieChartLabels = data.chartData.labels;
      this.pieChartDatasets[0].data = data.chartData.data;
      this.isDataLoaded = true;
    });
  }

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    // Re-render the chart if the window size is smaller than 600px
    if (event.target.innerWidth < 600) {
    }
 }
}
