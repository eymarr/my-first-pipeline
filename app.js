const express = require("express");
const _ = require("underscore");

const port = process.env.PORT || 8080;
const animals = {
  cat: "meow",
  dog: "bark",
  eel: "hiss",
  bear: "growl",
  frog: "croak",
  lion: "roar",
  bird: "tweet",
  cow: "moo",
};

function getAnimal() {
  return _.sample(Object.entries(animals));
}

const app = express();

app.get("/", (req, res) => {
  const [animal_name, sound] = getAnimal();
  res.status(200).send(`
    <h1>George Orwell had a farm.</h1>
    <p>E-I-E-I-O</p>
    <p>And on his farm he had a ${animal_name}.</p>
    <p>E-I-E-I-O</p>
    <p>With a ${sound}-${sound} here.</p>
    <p>And a ${sound}-${sound} there.</p>
    <p>Here a ${sound}, there a ${sound}.</p>
    <p>Everywhere a ${sound}-${sound}.</p>
  `);
});

app.get("/api", (req, res) => {
  res.status(200).json(animals);
});

// Solo inicia el servidor si no está en un entorno de Vercel (para evitar bucles)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Launching server on http://localhost:${port}`);
  });
}

module.exports = app;

