import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import eventiRoutes from "./infrastructure/api/routes/eventiRoutes";
import mongoose from "mongoose";

dotenv.config();

const password = process.env.MONGODB_PASSWORD;
const dbName = process.env.MONGODB_DBNAME;
const dbUser = process.env.MONGODB_USER;

const uri = `mongodb+srv://${dbUser}:${password}@${dbName}.mongodb.net/?retryWrites=true&w=majority`;


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await mongoose.connect(uri);
    // Send a ping to confirm a successful connection
    await mongoose.connection.db.admin().ping();
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/eventi", eventiRoutes);

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
