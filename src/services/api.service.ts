import { IBook } from './../models/ibook';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  livres: IBook[] = [];
  urlapi = "https://gutendex.com/books/?search=science";

  constructor(private http: HttpClient) {}

  async getData(): Promise<any> {
    let data: any;
    try {
      data = await firstValueFrom(this.http.get(this.urlapi));
      this.livres = data.results.map((book: any) => ({
        id: book.id,
        titre: book.title.length < 20 ? book.title : book.title.substr(0, 40) + "...",
        auteur: book.authors && book.authors[0] ? book.authors[0].name : "Inconnu",
        genre: book.subjects && book.subjects[0] ? book.subjects[0] : "Non spécifié",
        anneepublication: book.authors && book.authors[0]?.death_year
          ? parseInt(book.authors[0].death_year) - 10
          : "Année inconnue",
        status: 'disponible',
        image: book.formats && book.formats['image/jpeg'] ? book.formats['image/jpeg'] : 'default-image.jpg'
      }));
    } catch (e) {
      console.error('Erreur lors de la récupération des données :', e);
    }
    return data;
  }
}