import { Component } from '@angular/core';
import { SidebarPositionService } from 'src/app/services/sidebar-position.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  position : string = this.service.getData('position')
  isClosed : boolean = false
  constructor(private service : SidebarPositionService) {}

  onChangePosition(position : string) {
    console.log('Position', position)
    this.service.saveData(position)
    position = position
  }

  onChangeSidebar() {
    this.isClosed = !this.isClosed
  }
}
