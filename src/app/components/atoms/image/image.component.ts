import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  @HostBinding('style.-webkit-mask-image')
  private _route : string = ""
  @Input() color : string = ""

  @Input() set route(fileRoute : string) {
    this._route = `url("${fileRoute}")`
  }
}
