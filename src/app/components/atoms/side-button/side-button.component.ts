import { Component, Input } from '@angular/core';
import { ButtonAttribute } from 'src/app/interfaces/buttonattribute';

@Component({
  selector: 'app-side-button',
  templateUrl: './side-button.component.html',
  styleUrls: ['./side-button.component.scss']
})

export class SideButtonComponent {
  @Input() buttonAttribute : ButtonAttribute = {
    value: "",
    route: "",
    imgRoute: "",
    btnName: ""
  }
}
