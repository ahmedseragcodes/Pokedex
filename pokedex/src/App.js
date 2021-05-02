/* eslint-disable no-unused-vars */
//TECH IMPORTS
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Link, useHistory, useParams } from "react-router-dom";
//COMPONENT IMPORTS
import { fetchPokemon, addPokemon, deletePokemon, editPokemon } from "./store/actions";
import UpdatePokemon from "./components/updatePokemon";

function App(props) {

const history = useHistory();



useEffect(()=>{
  props.fetchPokemon();
},[])

const clickToEditPokemon = (pokemonToEdit) => {
  history.push(`/update/${pokemonToEdit}`);
}

  return (
    <div>
    <Route exact path="/">
    <div className="frontPageNavBar">
      <Link to="/">Home</Link>
    </div>
    <div className="frontPageCatchAll">
      <h1>Pokedex</h1>
      <div className="allPokemonContainer">
      {props.pokemon.map((individualPokemon)=>{
        return (
          <div key={individualPokemon.name} className="individualPokemonContainer">
            <p>{individualPokemon.name}</p>
            <button onClick={()=>props.deletePokemon(individualPokemon.name)} >Delete Pokemon</button>
            <button onClick={()=>clickToEditPokemon(individualPokemon.name)} >Edit Pokemon</button>
          </div>
        )
      })}
      </div>
    </div>
    </Route>
    <Route path="/update/:name">
      <UpdatePokemon />
    </Route>
    </div>
  );
}

//REDUX LOGIC
const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon,
    isLoading: state.isLoading,
    error: state.error
  }
}


export default connect(mapStateToProps, { fetchPokemon, addPokemon, deletePokemon, editPokemon })(App);
