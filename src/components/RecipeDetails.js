import React from "react";
import { v4 as uuidv4 } from "uuid";

const RecipeDetails = ({ ingredients}) => {
  return ingredients.map(ingredient => {
    return (
      <ul key={uuidv4()} className="ingredient-list">
        <li className="ingredient-text">{ingredient.text}</li>
        <li className="ingredient-weight">Weight :{Math.round(ingredient.weight*100)/100}g</li>
      </ul>
    );
  });
};

export default RecipeDetails;