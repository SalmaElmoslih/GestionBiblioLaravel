export interface IBook{
    id : number
    titre : string
    auteur:string
    genre : string
    publicationYear : number
    statut : 'disponible'|'emprunté'
    image: any
}

