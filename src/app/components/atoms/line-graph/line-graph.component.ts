import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto'

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss']
})
export class LineGraphComponent implements OnInit {

  public chart : any;
  gradient : any;
  height : any;
  width : any;
  getGradient(ctx : any, chartArea : any) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if(!this.gradient || this.width !== chartWidth || this.height !== chartHeight) {
      this.width = chartWidth;
      this.height = chartHeight;
      this.gradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0)
      this.gradient.addColorStop(0, 'rgb(91, 33, 182)')
      this.gradient.addColorStop(1, 'rgb(255, 94, 161)')
    }
    return this.gradient
  }
  createChart(){

    
    this.chart = new Chart("line-chart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17',
                 '2022-05-18','2022-05-19','2022-05-20','2022-05-21', ], 
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576', '500', '476'
                 , '376', '276'],
            backgroundColor: 'blue',
            tension: 0.4,
            pointRadius: 0,
            borderColor: (context, options) => {
              var miniChart = context.chart   
              const {ctx, chartArea} = miniChart

              if(!chartArea) {
                return
              }
              const gradient = this.getGradient(ctx, chartArea)
              return gradient
            },
          }
        ]
      },
      options: {
        aspectRatio:5.5,
        maintainAspectRatio: false,
        responsive: true,
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

