import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
 import Nutrients from "./Nutrients";

const Recipe = ({ recipe }) => {
  const [show, setShowingredients] = useState(false);
  const [shown, setShownutrients] = useState(false);

  const { label, image, url, ingredients, calories } = recipe.recipe;

  return (
    <div className="recipe">
      <div className="recipe-label">
      <h2>{label}</h2>
      </div>
      < a href={url} target="_blank" rel="noopener noreferrer" className="phot-link">
      <img src={image} alt={label} />
      </a>
      <div className="ingre-nut">
      <button onClick={() => setShowingredients(!show)}><span>Ingredients</span></button>
      <div>
      <button onClick={() => setShownutrients(!shown)}><span>
      {Math.round(calories*100)/100} kcal </span>
      </button>
      </div>
      </div>
      {show && <RecipeDetails ingredients={ingredients} />}
      { shown && <Nutrients
        valueP={recipe.recipe.totalNutrients.CHOCDF.quantity}
        valueF={recipe.recipe.totalNutrients.FAT.quantity}
        valueS={recipe.recipe.totalNutrients.SUGAR.quantity}
        valuePR={recipe.recipe.totalNutrients.PROCNT.quantity}
      />}
    </div>
  );
};

export default Recipe;