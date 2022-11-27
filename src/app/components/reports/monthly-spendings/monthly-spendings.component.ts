import { ReportService } from './../../../services/report.service';
import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { Report } from 'src/app/models/report.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monthly-spendings',
  templateUrl: './monthly-spendings.component.html',
  styleUrls: ['./monthly-spendings.component.css'],
})
export class MonthlySpendingsComponent implements OnInit {

  constructor(private reportService: ReportService, private router: Router) {}

  isDashboard: boolean = false;

  isDataLoaded: boolean = false;

  colors : string[] = [
    '#3ACE64',
    '#7D89F0',
    '#E9918C',
    '#FFD172',
    '#E88740',
    '#DF51C0',
    '#40A5E8',
    '#51DFC6',
  ];


  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],

        backgroundColor: this.colors,
        borderRadius: 10,
        barThickness: 15,
        borderWidth: 0,
      },
    ],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    layout: {
      padding: {
        left: 15,
        right: 15,
        top: 0,
        bottom: 0,
      },
    },
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          color: '#f8f8f8',
          boxHeight: 0,
          boxWidth: 0,
        },
      },
      tooltip: {
        backgroundColor: '#2D2A3E',
        usePointStyle: true,
        boxHeight: 10,
        boxPadding: 10,
        titleFont: {
          family: 'Inconsolata',
        },
        bodyFont: {
          family: 'Inconsolata',
        },
        callbacks: {
          labelTextColor: function (context) {
            return '#f8f8f8';
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          maxRotation: 45,
          minRotation: 45,
          color: '#615E74',
          font: {
            size: 13,
            family: 'Karla',
          },
        },
      },
      y: {
        ticks: {
          color: '#615E74',
          font: {
            size: 13,
            family: 'Karla',
          },
        },
      },
    },
  };


  ngOnInit(): void {
    this.getChartData();  

    if (this.router.url === '/dashboard') {
      this.isDashboard = true;
      console.log('isDashboard', this.isDashboard);   
    } else {
      this.isDashboard = false;
      console.log('isDashboard', this.isDashboard);   
    }
  }

  getChartData() {
    this.reportService.getMonthlyReport().subscribe((data: any) => {
      this.barChartData.labels = data.chartData.labels;
      this.barChartData.datasets[0].data = data.chartData.data;

      this.isDataLoaded = true;
    });
  }
}
