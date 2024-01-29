// import { v4 as uuidv4 } from 'uuid';

// export class Evento {
//   id: string; // Identificatore unico dell'evento
//   titolo: string;
//   descrizione: string;
//   data: Date;
//   luogo: string;
//   tipo: string; // Es: concerto, conferenza, etc.

//   constructor(
//     titolo: string,
//     descrizione: string,
//     data: Date,
//     luogo: string,
//     tipo: string
//   ) {
//     this.id = uuidv4();
//     this.titolo = titolo;
//     this.descrizione = descrizione;
//     this.data = data;
//     this.luogo = luogo;
//     this.tipo = tipo;
//     this.valida();
//   }


//   // Metodo per aggiornare l'evento
//   aggiorna(
//     titolo: string,
//     descrizione: string,
//     data: Date,
//     luogo: string,
//     tipo: string
//   ) {
//     this.titolo = titolo;
//     this.descrizione = descrizione;
//     this.data = data;
//     this.luogo = luogo;
//     this.tipo = tipo;

//     this.valida();
//   }
// }

// // Potrebbero essere aggiunti ulteriori metodi o proprietà a seconda delle esigenze specifiche.

export interface Evento {
  id: Object;
  titolo: string;
  descrizione: string;
  data: Date;
  luogo: string;
  tipo: string;
}
