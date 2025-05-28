import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';  

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/weather', async (req, res) => {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: 'Parâmetro "city" é obrigatório.' });
  }

  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: process.env.OPENWEATHER_API_KEY,
        units: 'metric',
        lang: 'pt_br'
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      error: error.response?.data || 'Erro ao buscar clima.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy do clima rodando em http://localhost:${PORT}`);
});
