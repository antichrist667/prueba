
const fetch = require('node-fetch');
const Character = require('../models/Character');

const fetchAndStoreData = async () => {
  try {
    const response = await fetch('https://dattebayo-api.onrender.com');
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();

    await Character.sync({ force: true }); 

    await Character.create({
      id: data.id,
      name: data.name,
      status: data.status,
      species: data.species,
      gender: data.gender,
      origin: data.origin,
      location: data.location,
      image: data.image
    });

    console.log('Datos almacenados correctamente');
  } catch (error) {
    console.error('Error al consumir la API o almacenar datos:', error);
  }
};

fetchAndStoreData();
