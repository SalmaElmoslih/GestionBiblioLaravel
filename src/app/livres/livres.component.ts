import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivreComponent } from './livre/livre.component';
import { IBook } from '../../models/ibook';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-livres',
  standalone: true,
  imports: [CommonModule, LivreComponent],
  templateUrl: './livres.component.html',
  styleUrl: './livres.component.scss'
})
export class LivresComponent {
       livres_list: IBook[]=[];

          private monservice = inject(ApiService)
       constructor() {
          console.log(this.monservice.getData());
       }
       async ngOnInit(){
          let Data : any;
          Data = await this.monservice.getData();
          this.livres_list = this.monservice.livres;

       }
       addLivre(livre: IBook) {
            this.livres_list.push(livre);
       }
  }
  
  