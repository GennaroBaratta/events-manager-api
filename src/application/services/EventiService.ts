// /src/application/services/EventiService.ts

import { CreazioneEvento } from "../../core/use-cases/CreazioneEvento";
import { IEventiRepository } from "../../application/interfaces/IEventiRepository";
import { Evento } from "../../core/entities/Evento";

export class EventiService {
  private eventiRepo: IEventiRepository;

  constructor(eventiRepo: IEventiRepository) {
    this.eventiRepo = eventiRepo;
  }

  async creaEvento(
    titolo: string,
    descrizione: string,
    data: Date,
    luogo: string,
    tipo: string
  ): Promise<Evento> {
    const creazioneEvento = new CreazioneEvento(this.eventiRepo);
    return creazioneEvento.esegui(titolo, descrizione, data, luogo, tipo);
  }

  // Qui puoi aggiungere altri metodi per gestire altri casi d'uso...
}
