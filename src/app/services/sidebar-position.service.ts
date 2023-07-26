import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarPositionService {

  constructor() { }

  public saveData(position: string) {
    localStorage.setItem("position", position)
  }

  public getData(key: string) : string {
    return localStorage.getItem(key) ?? ""
  }
}
