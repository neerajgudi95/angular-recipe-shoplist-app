import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class Header {
  @Output('routeSelect') routeSelect = new EventEmitter<string>();

  onSelect(route: string) {
    this.routeSelect.emit(route);
  }
}
