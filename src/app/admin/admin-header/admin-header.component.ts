import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {
  onMenuItemClick(item: string) {
    console.log(`Clicked ${item}`);
    // do something else here
  }
}
