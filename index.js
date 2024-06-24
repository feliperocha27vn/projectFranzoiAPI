import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const prisma = new PrismaClient();


const app = express();
app.use(express.json());
app.use(cors());
// get top10
app.get('/api/top10', async (req, res) => {
  try {
    const top10 = await prisma.top10.findMany();
    res.status(200).json(top10);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});
// get top10brincos
app.get('/api/top10brincos', async (req, res) => {
  try {
    const top10brincos = await prisma.top10brincos.findMany();
    res.status(200).json(top10brincos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});
// get top10correntes
app.get('/api/top10correntes', async (req, res) => {
  try {
    const top10correntes = await prisma.top10correntes.findMany();
    res.status(200).json(top10correntes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});
// get top10pulseiras
app.get('/api/top10pulseiras', async (req, res) => {
  try {
    const top10pulseiras = await prisma.top10pulseiras.findMany();
    res.status(200).json(top10pulseiras);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});



app.listen(
  process.env.PORT ? Number(process.env.PORT) : 3333,
  '0.0.0.0',
  () => {
    console.log("HTTP Server Running");
  }
);