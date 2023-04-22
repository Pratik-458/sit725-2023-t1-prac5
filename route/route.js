var express = require("express");
var router = express.Router();
let controller = require("../controller/controller");

router.get("/api/pokemon", (req, res) => {
  controller.getAllPokemons(req, res);
});

router.get("/api/pokemonbyid", (req, res) => {
  controller.getPokemonById(req, res);
});

router.post("/api/pokemon", (req, res) => {
  controller.addPokemon(req, res);
});

router.put("/api/pokemon/:name", async (req, res) => {
  controller.updatePokemon(req, res);
});

module.exports = router;
