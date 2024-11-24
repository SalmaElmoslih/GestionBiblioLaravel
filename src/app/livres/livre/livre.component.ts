import { Component, EventEmitter, Output } from '@angular/core';
import { IBook } from '../../../models/ibook';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-livre',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './livre.component.html',
  styleUrl: './livre.component.scss'
})
export class LivreComponent {
  livres: IBook[] = [];
  newLivre: IBook = {
        id: 0,
        titre: '',
        auteur: '',
        genre: '',
        publicationYear: new Date().getFullYear(),
        statut: 'disponible',
        image:''
  };
  @Output()
  addLivreEmitter = new EventEmitter<IBook>();
  image: any = "";
  addLivre(titre: string, autheur: string, genre: string,publicationYear:string) {           
    this.newLivre={
      id: 0,
      titre: titre,
      auteur: autheur,
      genre: genre,
      publicationYear: parseInt(publicationYear),
      statut: "disponible",
      image:this.image
    }
    this.addLivreEmitter.emit(this.newLivre);
  }
  addLivre2(){
    this.newLivre.image=this.image;
    this.addLivreEmitter.emit(this.newLivre);
  }
  addImage(event: any) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
               reader.onload = () => {
                this.image = reader.result;
            }
  }
}
