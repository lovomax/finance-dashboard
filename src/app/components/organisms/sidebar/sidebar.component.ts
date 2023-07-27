import { Component, OnInit } from '@angular/core';
import { SidebarPositionService } from 'src/app/services/sidebar-position.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  position : string = "dashboard"
  isClosed : boolean = false
  constructor(private service : SidebarPositionService, private router: Router) {}
  ngOnInit(): void {
    const data = this.service.getData('position')
    const state = Boolean(this.service.getData('closed') === 'true')
    if(data.length) {
      this.position = data
    }
    this.isClosed = state
    this.onChangeRoute(this.position)
  }
  onChangePosition(position : string) {
    this.service.saveData(position)
    position = position
    this.onChangeRoute(position)
  }

  onChangeState() {
    const state = !this.isClosed
    this.service.saveState(state)
    this.isClosed = state
  }

  onChangeRoute($myParam: string = ''): void {
    const navigationDetails: string[] = [];
    if($myParam.length) {
      navigationDetails.push('/' + $myParam);
    }
    this.router.navigate(navigationDetails);
  }
}
