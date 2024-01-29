// /src/infrastructure/api/routes/eventiRoutes.js

import express from "express";
import { eventiService } from "../../../index";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { titolo, descrizione, data, luogo, tipo } = req.body;
    const evento = await eventiService.creaEvento(
      titolo,
      descrizione,
      new Date(data),
      luogo,
      tipo
    );
    res.status(201).json(evento);
  } catch (errore: unknown) {
    res.status(500).json({ errore: (errore as Error)?.message });
  }
});

export default router;
