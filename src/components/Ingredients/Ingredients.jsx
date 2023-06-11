import React from "react";
import { Ingredient } from "../Ingredient/Ingredient";


export const Ingredients = ({ingredients}) => {

    return (
    <div>
        <p>Ingredients</p>
        <ul>
        {
            ingredients.map((ingredient)=> (
                <li>
                    <Ingredient ingredient={ingredient}/>
                </li>))
        } 
        </ul>

    </div>
    )
};