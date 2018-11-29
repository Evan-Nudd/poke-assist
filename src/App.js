import React, { Component } from "react";
import "./App.css";
import pokedexJSON from "./pokedex.json";
import Pokemon from "./pokemon.js";
import PokeCard from "./poke-card.js";
import Grid from "@material-ui/core/Grid";

import TextField from "@material-ui/core/TextField";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokedex: this.loadPokeDex(),
      poke_view: this.loadPokeDex(),
      search_text_field: ""
    };
  }

  loadPokeDex = () => {
    var dex = [];
    for (var pokemonIndex in pokedexJSON) {
      var pokemonJSON = pokedexJSON[pokemonIndex];
      const pokemon = new Pokemon(pokemonJSON["id"], pokemonJSON["ename"]);
      dex.push(pokemon);
    }
    return dex;
  };

  loadPokeCards = () => {
    let pokemonCards = [];

    for (const pokeIndex in this.state.poke_view) {
      const pokemon = this.state.poke_view[pokeIndex];
      pokemonCards.push(
        <PokeCard key={pokemon.name.toString()} pokemon={pokemon} />
      );
    }
    return pokemonCards;
  };

  loadItemsIntoGrid = (items, size) => {
    var panels = [];
    for (const index in items) {
      panels.push(
        <Grid key={"gridItem" + index} item xs={size}>
          {items[index]}
        </Grid>
      );
    }
    return panels;
  };

  updateView = e => {
    if (e.target.value === "" || e.target.value.length === 0) {
      this.setState({
        poke_view: this.state.pokedex,
        search_text_field: e.target.value
      });
      return;
    }
    // TODO Optimize this...
    var searched = this.state.pokedex.filter(pokemon => {
      if (pokemon.name.toUpperCase().includes(e.target.value.toUpperCase())) {
        return pokemon;
      }
    });
    this.setState({ poke_view: searched, search_text_field: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <Grid container justify="center">
          <Grid item xs={8}>
            <TextField
              value={this.state.search_text_field}
              onChange={this.updateView}
              label="pokemon"
              fullWidth
            />
          </Grid>
          <Grid item xs={10}>
            <Grid container spacing={8}>
              {this.loadItemsIntoGrid(this.loadPokeCards(), 3)}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
