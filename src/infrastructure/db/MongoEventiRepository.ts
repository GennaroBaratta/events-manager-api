// /src/infrastructure/db/MongoEventiRepository.ts

import { ObjectId } from "mongodb";
import { IEventiRepository } from "../../application/interfaces/IEventiRepository";
import { Evento } from "../../core/entities/Evento";
import EventoModel from "./models/EventoModel";
import { MongooseError } from "mongoose";

export class MongoEventiRepository implements IEventiRepository {
  constructor() {
    // Inizializzazione e connessione al database, se necessario
  }
  async trovaTutti(): Promise<Evento[]> {
    const documenti = await EventoModel.find({});
    return documenti.map((doc) => ({
      id: doc._id,
      titolo: doc.titolo,
      descrizione: doc.descrizione,
      data: doc.data,
      luogo: doc.luogo,
      tipo: doc.tipo,
    }));
  }

  async trovaPerId(id: string): Promise<Evento | null> {
    const documento = await EventoModel.findById(id);
    if (!documento) return null;

    return {
      id: documento._id,
      titolo: documento.titolo,
      descrizione: documento.descrizione,
      data: documento.data,
      luogo: documento.luogo,
      tipo: documento.tipo,
    };
  }

  async aggiorna(evento: Evento): Promise<void> {
    const { id, titolo, descrizione, data, luogo, tipo } = evento;
    await EventoModel.findByIdAndUpdate(id, {
      titolo,
      descrizione,
      data,
      luogo,
      tipo,
    });
  }

  async elimina(id: string): Promise<void> {
    await EventoModel.findByIdAndDelete(id);
  }

  async salva(evento: Evento): Promise<ObjectId> {
    try {
      const eventoModel = new EventoModel({
        titolo: evento.titolo,
        descrizione: evento.descrizione,
        data: evento.data,
        luogo: evento.luogo,
        tipo: evento.tipo,
      });
      await eventoModel.save();
      return eventoModel._id;
    } catch (errore) {
      if (errore instanceof MongooseError) {
        // Converti l'errore di Mongoose in un errore di dominio
        throw new Error(
          "Errore durante il salvataggio dell'evento: " + errore.message
        );
      }
      throw errore; // Rilancia gli errori non gestiti
    }
  }
}
