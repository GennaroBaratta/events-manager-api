import mongoose from "mongoose";

const eventoSchema = new mongoose.Schema({
  titolo: {
    type: String,
    required: true,
  },
  descrizione: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    required: true,
  },
  luogo: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
});

const EventoModel = mongoose.model("Evento", eventoSchema);

export default EventoModel;
