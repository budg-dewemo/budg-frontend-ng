import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-monthly-spendings',
  templateUrl: './monthly-spendings.component.html',
  styleUrls: ['./monthly-spendings.component.css'],
})
export class MonthlySpendingsComponent implements OnInit {
  @Input() chartOptions = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
      },
    ],
  };

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40, 56, 45, 33, 90, 102],
        // label: null,
        backgroundColor: [
          '#3ACE64',
          '#7D89F0',
          '#E9918C',
          '#FFD172',
          '#E88740',
          '#DF51C0',
          '#40A5E8',
          '#51DFC6',
        ],
        borderRadius: 10,
      },
    ],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
    plugins: {
      legend: {
        display: false,
        labels:
          {
            color: 'white'
          }
      },
      tooltip: {
        backgroundColor: '#2D2A3E',
        usePointStyle: true,
        boxHeight: 5,
        boxPadding: 5,
        bodyFont: {
          family: 'Inconsolata',
        },
        callbacks: {
          labelTextColor: function (context) {
            return 'white';
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

  constructor() {}

  ngOnInit(): void {}
}
