import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { LivresComponent } from "./livres/livres.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MenuComponent, LivresComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
    

}
