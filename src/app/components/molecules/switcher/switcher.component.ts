import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent {
  @Input() isClosed! : boolean
  @Input() theme! : boolean
  @Output() changeTheme : EventEmitter<any> = new EventEmitter()

  switchTheme() {
    this.changeTheme.emit()
  }
}
