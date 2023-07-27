import { Component } from '@angular/core';
import { SidebarPositionService } from 'src/app/services/sidebar-position.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  position : string = this.service.getData('position')
  isClosed : boolean = false
  constructor(private service : SidebarPositionService, private router: Router) {}

  onChangePosition(position : string) {
    console.log('Position', position)
    this.service.saveData(position)
    position = position
    this.onChangeRoute(position)
  }

  onChangeSidebar() {
    this.isClosed = !this.isClosed
  }

  onChangeRoute($myParam: string = ''): void {
    console.log('enter')
    const navigationDetails: string[] = [];
    if($myParam.length) {
      navigationDetails.push('/' + $myParam);
    }
    this.router.navigate(navigationDetails);
  }
}
