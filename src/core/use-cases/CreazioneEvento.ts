// /src/core/use_cases/CreazioneEvento.ts
import { Evento } from "../entities/Evento";
import { IEventiRepository } from "../../application/interfaces/IEventiRepository";

export class CreazioneEvento {
  private eventiRepo: IEventiRepository;

  constructor(eventiRepo: IEventiRepository) {
    this.eventiRepo = eventiRepo;
  }

  private valida(evento: Evento) {
    if (!evento.titolo || evento.titolo.length === 0) {
      throw new Error("Il titolo dell'evento è obbligatorio.");
    }
    if (!evento.data || evento.data.getTime() < Date.now()) {
      throw new Error("La data dell'evento non può essere nel passato.");
    }
    // Altre regole di validazione possono essere aggiunte qui
  }

  async esegui(
    titolo: string,
    descrizione: string,
    data: Date,
    luogo: string,
    tipo: string
  ): Promise<Evento> {
    // Creazione di un oggetto evento che rispetta l'interfaccia Evento
    const evento: Evento = {
      id: "", // L'ID verrà assegnato dal repository o dal database
      titolo,
      descrizione,
      data,
      luogo,
      tipo,
    };

    // La validazione può essere gestita qui o in un servizio dedicato

    try {
      this.valida(evento);
      const id = await this.eventiRepo.salva(evento);
      evento.id = id;
      return evento;
    } catch (errore: unknown) {
      throw new Error(
        "Errore durante il salvataggio dell'evento: " +
          (errore as Error)?.message
      );
    }
  }
}
