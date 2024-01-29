// Ad esempio, in un file di configurazione o all'avvio dell'app

import { EventiService } from "./application/services/EventiService";
import { MongoEventiRepository } from "./infrastructure/db/MongoEventiRepository";

export const eventiRepo = new MongoEventiRepository();
export const eventiService = new EventiService(eventiRepo);
