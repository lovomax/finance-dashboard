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
  theme : boolean = false
  constructor(private service : SidebarPositionService, private router: Router) {}
  ngOnInit(): void {
    const data = this.service.getData('position')
    const state = Boolean(this.service.getData('closed') === 'true')
    const theme = Boolean(this.service.getData('theme') === 'true')
    if(data.length) {
      this.position = data
    }
    if(theme) {
      const body = document.getElementsByTagName('body')[0]
      body.classList.add('dark-theme')
    }
    this.isClosed = state
    this.theme = theme
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
  onChangeTheme(): void {
    const state = !this.theme
    this.service.saveTheme(state)
    this.theme = state
    const body = document.getElementsByTagName('body')[0]
    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme')
    } else {
      body.classList.add('dark-theme')
    }
  }
}
