import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto'
import { dataMonthly, dataWeekly } from 'src/app/utils/data';


@Component({
  selector: 'app-bar-window',
  templateUrl: './bar-window.component.html',
  styleUrls: ['./bar-window.component.scss']
})
export class BarWindowComponent implements OnInit {
  buttons = [
    {btnName: 'weekly', value:"Weekly"},
    {btnName: 'monthly', value: "Monthly"}
  ]
  selected : string = "weekly";
  data : any = {}
  public chart : any;
  handleButton(value : string) {
    this.selected = value
    this.createChart()
  }
  createChart(){
    if(!this.chart){
      this.chart = new Chart("data-week", {
        type: 'bar', //this denotes tha type of chart
        data: this.selected === 'weekly' ? dataWeekly : dataMonthly,
        options: {
          aspectRatio:2.5,
          maintainAspectRatio: true,
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
    } else {
      this.chart.destroy()
      this.chart = new Chart("data-week", {
        type: 'bar', //this denotes tha type of chart
        data: this.selected === 'weekly' ? dataWeekly : dataMonthly,
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
  }
  ngOnInit(): void {
    this.createChart()
  }
}
