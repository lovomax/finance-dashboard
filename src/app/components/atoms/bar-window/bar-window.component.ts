import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto'

@Component({
  selector: 'app-bar-window',
  templateUrl: './bar-window.component.html',
  styleUrls: ['./bar-window.component.scss']
})
export class BarWindowComponent implements OnInit {

  public chart : any;
  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17',
                 '2022-05-18','2022-05-19','2022-05-20','2022-05-21', '2022-05-21',
                 '2022-05-21', '2022-05-21', '2022-05-21', ], 
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576', '500', '476'
                 , '376', '276', "150", "200", "340", "460"],
            backgroundColor: 'rgb(91, 33, 182)',
            borderRadius: 20,
            barThickness: 5
          }
        ]
      },
      options: {
        aspectRatio:2.5,
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
