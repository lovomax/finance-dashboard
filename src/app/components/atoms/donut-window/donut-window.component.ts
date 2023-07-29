import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto'

@Component({
  selector: 'app-donut-window',
  templateUrl: './donut-window.component.html',
  styleUrls: ['./donut-window.component.scss']
})
export class DonutWindowComponent  implements OnInit {

  public chart : any;
  createChart(){
  
    this.chart = new Chart("donut-chart", {
      type: 'doughnut', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['BTC', 'ETH', 'DC' ], 
	       datasets: [
          {
            label: 'Wallet',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          } 
        ]
      },
      options: {
        aspectRatio:1,
        borderColor: 'transparent',
        cutout: '80%',
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: false
          },
          subtitle: {
            display: false
          }
        },
        scales: {
          x: {
              display: false
          },

          y: {
              display: false
          }
        }
        
      }
      
    });
  }
  ngOnInit(): void {
    this.createChart()
  }
}
