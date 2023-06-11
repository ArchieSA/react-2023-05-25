import React from "react";

export const Ingredient = ({ingredient}) => {

    if(!ingredient?.length)
        return null;

    return (
    <div>
        <p>{ingredient}</p>
    </div>
    )
};