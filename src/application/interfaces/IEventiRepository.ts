import { Evento } from "../../core/entities/Evento";

export interface IEventiRepository {
  salva(evento: Evento): Promise<Object>;
  trovaTutti(): Promise<Evento[]>;
  trovaPerId(id: string): Promise<Evento | null>;
  aggiorna(evento: Evento): Promise<void>;
  elimina(id: string): Promise<void>;
}
