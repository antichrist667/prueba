// server.js
const express = require('express');
const sequelize = require('./config/database');
const Character = require('./models/Character');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/characters', async (req, res) => {
  try {
    const characters = await Character.findAll();
    res.json(characters);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
});

app.get('/characters/:id', async (req, res) => {
  try {
    const character = await Character.findByPk(req.params.id);
    if (character) {
      res.json(character);
    } else {
      res.status(404).json({ error: 'Personaje no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
});

// Otros endpoints según sea necesario

sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });
