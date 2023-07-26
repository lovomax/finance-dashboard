import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ButtonAttribute } from 'src/app/interfaces/buttonattribute';

@Component({
  selector: 'app-sideupper',
  templateUrl: './sideupper.component.html',
  styleUrls: ['./sideupper.component.scss']
})
export class SideupperComponent {
  @Input() position : string = ""
  @Output() changePosition : EventEmitter<any> = new EventEmitter()
  buttons : ButtonAttribute[] = [
    {route: "", value:"Dashboard", imgRoute:"assets/film-script.svg", btnName:"dashboard"}, 
    {route: "", value:"Buy / Sell", imgRoute:"assets/repeat.svg", btnName:"buysell"}, 
    {route: "", value:"Transactions", imgRoute:"assets/piggy-bank.svg", btnName:"transactions"}, 
    {route: "", value:"Exchange", imgRoute:"assets/arrows-left-right.svg", btnName:"exchange"}, 
    {route: "", value:"Tools", imgRoute:"assets/gear.svg", btnName:"tools"}
  ]

  handlePositionClick(pos : string) {
    console.log('Posicion', pos)
    this.changePosition.emit(pos)
    this.position = pos
  }
}
