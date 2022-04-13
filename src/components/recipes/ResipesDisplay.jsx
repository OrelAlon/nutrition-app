import { useState } from "react";

import RecipeDetails from "./SingleRecipeData";

import { BsPeopleFill } from "react-icons/bs";
import { BiDownArrowCircle } from "react-icons/bi";
import { FaNutritionix } from "react-icons/fa";
import { BiBlock } from "react-icons/bi";

const ResipesDisplay = ({ recipe }) => {
  const [showRecipe, setShowRecipe] = useState(false);

  const { label, image, digest, calories, ingredients } = recipe.recipe;

  return (
    <div className="food">
      <div className="food-description">
        <div className="food1">
          <img className="food-img" src={image} alt="food"></img>
          <div className="food-text">
            <h3 className="text1-food">{label}</h3>
            <p className="text2-food">
              <BsPeopleFill className="iconPeople" /> 5 ?
              <FaNutritionix className="iconCal" /> {Math.ceil(calories)}
            </p>
            <p className="text3-food">
              Fat: {Math.ceil(digest[0].total)} g <br />
              Carbs: {Math.ceil(digest[1].total)} g <br />
              Protein: {Math.ceil(digest[2].total)} g
            </p>
          </div>
          <p className="text4-food" onClick={() => setShowRecipe(!showRecipe)}>
            {showRecipe ? "Close" : "Read More"}{" "}
            {showRecipe ? (
              <BiBlock className="iconCloseLock" />
            ) : (
              <BiDownArrowCircle className="iconArrow" />
            )}{" "}
          </p>
          {showRecipe && <RecipeDetails ingredients={ingredients} />}
        </div>
      </div>
    </div>
  );
};

export default ResipesDisplay;
