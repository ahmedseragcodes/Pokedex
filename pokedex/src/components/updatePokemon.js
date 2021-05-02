//TECH IMPORTS
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
//COMP IMPORTS
import { editPokemon } from "../store/actions";

const UpdatePokemon = (props) => {

    //HOOKS / STATE

    const params = useParams();
    const history = useHistory();
    
    const [updateFormValues, setUpdateFormValues] = useState({
        nameOfOriginalPokemon: "",
        name: "",
    })

    //SETS POKEMON TO CHANGE BASED ON DYNAMIC URL
    useEffect(()=>{
        setUpdateFormValues({
            ...updateFormValues,
            nameOfOriginalPokemon: params.name,
            name: params.name
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("HERE'S WHAT TEST POKEMON LOOKS LIKE", props.testPokemon)
        console.log("HERE'S WHAT THE POKEMON LOOK LIKE", props.pokemon)
        console.log(updateFormValues);
        props.editPokemon(updateFormValues);
        history.push("/");
    }

    //HANDLES CHANGES TO UPDATE FORM
    const handleUpdateFormChange = (event) => {

        const { name, value, type, checked } = event.target;

        const valueToUse = type === "radio" ? checked : value

        setUpdateFormValues({
            ...updateFormValues,
            [name]: valueToUse
        })
    }

        return (
            <div>
                <Link to="/">Home</Link>
                <h2>Update Pokemon</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">
                    <input type="text" name="name" id="name" value={updateFormValues.name} onChange={handleUpdateFormChange} />
                    </label>
                    <button>Submit Updated Pokemon</button>
                </form>
            </div>
        )
}


//REDUX CODE

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon,
        isLoading: state.isLoading,
        error: state.error
    }
}


export default connect(mapStateToProps, { editPokemon })(UpdatePokemon)