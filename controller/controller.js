let model = require("../model/model");

const getAllPokemons = (req, res) => {
  model.getAllPokemons((error, result) => {
    if (!error) {
      res.json({ statusCode: 200, data: result, message: "success!" });
    } else {
      console.log(error);
    }
  });
};

const getPokemonById = (req, res) => {
  model.getPokemonById((error, result) => {
    if (!error) {
      res.json({ statusCode: 200, data: result, message: "success!" });
    } else {
      console.log(error);
    }
  });
};

const addPokemon = (req, res) => {
  let pokemon = req.body;
  model.addPokemon(pokemon, (error, result) => {
    if (!error) {
      res.json({ statusCode: 200, data: result, message: "Added" });
    } else {
      console.log(error);
      res.json({ statusCode: 400, data: error, message: "Failed" });
    }
  });
};

const updatePokemon = async (req, res) => {
  let pokemon = req.body;
  let title = req.params.name;
  await model.updatePokemon(pokemon, title, (error, result) => {
    if (!error) {
      res.json({ statusCode: 200, data: result, message: "Updated" });
    } else {
      console.log(error);
      res.json({ statusCode: 400, data: error, message: "Failed" });
    }
  });
};

module.exports = { getAllPokemons, getPokemonById, addPokemon, updatePokemon };
