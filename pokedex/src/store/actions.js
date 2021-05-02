//TECH IMPORTS
import axios from "axios"
//COMP IMPORTS
// eslint-disable-next-line no-unused-vars
import axiosWithAuth from "../components/axiosWithAuth";

export const FETCH_POKEMON_START = "FETCH_POKEMON_START";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";
export const DELETE_POKEMON = "DELETE_POKEMON";
export const ADD_POKEMON = "ADD_POKEMON";
export const EDIT_POKEMON = "EDIT_POKEMON";

export const fetchPokemon = () => (dispatch) => {
    dispatch({ type: FETCH_POKEMON_START })
    axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=50")
    .then((res)=>{
        console.log("SUCCEEDED FETCHING POKEMON", res);
        dispatch({ type: FETCH_POKEMON_SUCCESS, payload: res.data.results })
    })
    .catch((err)=>{
        console.log("FAILED TO FETCH POKEMON", err);
        dispatch({ type: FETCH_POKEMON_FAILURE, payload: err })
    })
}

export const deletePokemon = (pokemonToDelete) => {
    return ({ type: DELETE_POKEMON, payload: pokemonToDelete })
}

export const addPokemon = (pokemonToAdd) => {
    return ({ type: ADD_POKEMON, payload: pokemonToAdd })
}

export const editPokemon = (editedPokemon) => {
    return ({ type: EDIT_POKEMON, payload: editedPokemon  })
}