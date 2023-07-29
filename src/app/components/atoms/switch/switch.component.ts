import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
  @Output() changeTheme : EventEmitter<any> = new EventEmitter()
  @Input() theme! : boolean

  handleClick() {
    this.theme = !this.theme
    this.changeTheme.emit()
  }
}
