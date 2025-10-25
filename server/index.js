import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config();

const app = express();

const allowedOrigins = [
  'http://localhost:5173', // Keep for local development
  'https://ai-community-showcase-mern-stabilit.vercel.app', // Your Vercel frontend URL
];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use(express.json({ limit: "50mb" }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get("/", async (req, res) => {
  res.send("Hello from DALL-E!");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log("Server has Started on port https://ai-community-showcase-mern-stability-ai.onrender.com")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
