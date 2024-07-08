import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// Inicializa o Prisma Client
const prisma = new PrismaClient();

// Função assíncrona para conectar ao banco de dados e iniciar o servidor
async function startServer() {
  try {
    await prisma.$connect();
    console.log("Conectado ao banco de dados!");

    // Rotas
    app.get("/api/top10", async (req, res) => {
      try {
        const top10 = await prisma.top10.findMany();
        res.status(200).json(top10);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar produtos" });
      }
    });

    app.get("/api/top10brincos", async (req, res) => {
      try {
        const top10brincos = await prisma.top10brincos.findMany();
        res.status(200).json(top10brincos);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar produtos" });
      }
    });

    app.get("/api/top10correntes", async (req, res) => {
      try {
        const top10correntes = await prisma.top10correntes.findMany();
        res.status(200).json(top10correntes);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar produtos" });
      }
    });

    app.get("/api/top10pulseiras", async (req, res) => {
      try {
        const top10pulseiras = await prisma.top10pulseiras.findMany();
        res.status(200).json(top10pulseiras);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar produtos" });
      }
    });

    app.get("/api/top10/:id", async (req, res) => {  // Rota com parâmetro :id
      const itemId = parseInt(req.params.id); // Obtém o ID da requisição

      try {
        const item = await prisma.top10.findUnique({
          where: { id: itemId },
        });

        if (item) {
          res.status(200).json(item);
        } else {
          res.status(404).json({ error: "Item não encontrado" });
        }

      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar item" });
      }
    });

    app.get("/api/top10brincos/:id", async (req, res) => {  // Rota com parâmetro :id
      const itemId = parseInt(req.params.id); // Obtém o ID da requisição

      try {
        const item = await prisma.top10brincos.findUnique({
          where: { id: itemId },
        });

        if (item) {
          res.status(200).json(item);
        } else {
          res.status(404).json({ error: "Item não encontrado" });
        }

      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar item" });
      }
    });
    app.get("/api/top10correntes/:id", async (req, res) => {  // Rota com parâmetro :id
      const itemId = parseInt(req.params.id); // Obtém o ID da requisição

      try {
        const item = await prisma.top10correntes.findUnique({
          where: { id: itemId },
        });

        if (item) {
          res.status(200).json(item);
        } else {
          res.status(404).json({ error: "Item não encontrado" });
        }

      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar item" });
      }
    });
    app.get("/api/top10pulseiras/:id", async (req, res) => {  // Rota com parâmetro :id
      const itemId = parseInt(req.params.id); // Obtém o ID da requisição

      try {
        const item = await prisma.top10pulseiras.findUnique({
          where: { id: itemId },
        });

        if (item) {
          res.status(200).json(item);
        } else {
          res.status(404).json({ error: "Item não encontrado" });
        }

      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar item" });
      }
    });

    app.listen(
      process.env.PORT || 3333,
      "0.0.0.0",
      () => {
        console.log("HTTP Server Running");
      }
    );
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    process.exit(1);
  }
}

// Inicia o servidor
startServer();
