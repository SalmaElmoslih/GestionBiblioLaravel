import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true
})
export class MenuComponent implements AfterViewInit {
  ngAfterViewInit() {
    const dropdownToggle = document.querySelector('[data-bs-toggle="dropdown"]');
    if (dropdownToggle) {
      dropdownToggle.addEventListener('click', () => {
        console.log('Dropdown toggled!');
      });
    }
  }
}