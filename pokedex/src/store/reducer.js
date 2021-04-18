//TECH IMPORTS
import React from "react";
//COMPONENT IMPORTS
import { FETCH_POKEMON_START, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE, ADD_POKEMON, DELETE_POKEMON, EDIT_POKEMON } from "./actions";

const initialState = {
    pokemon: [],
    isLoading: false,
    error: "",
}


const reducer = (state=initialState, action)=>{
    switch(action.type){
        case(FETCH_POKEMON_START):
            return {
                ...state,
                isLoading: true,
                error: "",
            };
        case(FETCH_POKEMON_SUCCESS):
            return {
                ...state,
                pokemon: action.payload,
                isLoading: false,
                error: "",
            };
        case(FETCH_POKEMON_FAILURE):
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case(ADD_POKEMON):
            return {
                ...state,
                pokemon: [
                    ...state.pokemon,
                    action.payload
                ],
                isLoading: false,
                error: "",
            };
        case(DELETE_POKEMON):
            return state;
        case(EDIT_POKEMON):
            return state;
        default: 
            return state;
    }
}

export default reducer;