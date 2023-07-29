import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarPositionService {

  constructor() { }

  public saveData(position: string) {
    localStorage.setItem("position", position)
  }

  public saveState(state: boolean) {
    localStorage.setItem("closed", String(state))
  }

  public saveTheme(state : boolean) {
    localStorage.setItem("theme", String(state))
  }

  public getData(key: string) : string {
    if(key === "closed") {
      return localStorage.getItem(key) ?? "false"
    }
    return localStorage.getItem(key) ?? ""
  }
}
