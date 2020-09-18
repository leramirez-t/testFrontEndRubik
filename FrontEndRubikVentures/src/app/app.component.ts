import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FrontEndRubikVentures';

  //elementos agregados de sidebar
  opened = false;

  toggleSidebar() {
    this.opened = !this.opened;
  }
}
