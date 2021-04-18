/* eslint-disable no-unused-vars */
//TECH IMPORTS
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
//COMPONENT IMPORTS
import { fetchPokemon, addPokemon, deletePokemon, editPokemon } from "./store/actions";


function App(props) {


useEffect(()=>{
  props.fetchPokemon();
})

  return (
    <div className="frontPageCatchAll">
      <h1>Pokedex</h1>
    </div>
  );
}

//REDUX LOGIC
const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon,
    isLoading: state.isLoading,
    error: state.error,
  }
}


export default connect(mapStateToProps, { fetchPokemon, addPokemon, deletePokemon, editPokemon })(App);
