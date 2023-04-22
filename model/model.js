let client = require("../dbconnection");
let dbcollection = client.db("test").collection("Pokemons"); //TODO can be better

function getPokemonById(req) {
  return dbcollection.find({ title: req }).toArray();
}

function getAllPokemons(callBack) {
  dbcollection.find({}).toArray(callBack);
}

function addPokemon(pokemon, callBack) {
  dbcollection.insertOne(pokemon, callBack);
}

async function updatePokemon(pokemon, name, callBack) {
  var objToUpdate = await getPokemonById(name);
  console.log(objToUpdate);
  console.log(pokemon);
  var query = { title: name };
  dbcollection.updateOne(query, {
    $set: pokemon,
    callBack,
  });
}

module.exports = { getPokemonById, getAllPokemons, addPokemon, updatePokemon };
