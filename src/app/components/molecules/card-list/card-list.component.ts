import { Component } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  cards = [
    {imgRoute: "assets/currency-btc.svg", imgColor: '#00e7e2', amount: "8520.50", markcap: "151.45", color: '#00ebd7, #009dd3'},
    {imgRoute: "assets/currency-eth.svg", imgColor: '#bd89f7', amount: "270.00", markcap: "28.69", color: '#9868ff, #ff5aa0'},
    {imgRoute: "assets/currency-ltc.svg", imgColor: '#ffd1a3', amount: "115.13", markcap:" 7.14", color: '#ffd387, #ff566a'},
    {imgRoute: "assets/currency-dgc.svg", imgColor: '#9a77ff', amount: "110.10", markcap: "5.2", color: '#7c44ff, #a27cfc'}
  ]
}
