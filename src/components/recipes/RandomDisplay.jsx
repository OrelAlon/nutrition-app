import { useState } from "react";

import SingleRandomData from "./SingleRandomData";

import { BiDownArrowCircle } from "react-icons/bi";
import { FaNutritionix } from "react-icons/fa";
import { BiBlock } from "react-icons/bi";

const RandomDisplay = ({ randomSearch }) => {
  const [showRecipe, setShowRecipe] = useState(false);

  const { title, image, pricePerServing, diets, extendedIngredients } =
    randomSearch[0];

  return (
    <div className="food">
      <div className="food-description">
        <div className="food1">
          <img className="food-img" src={image} alt="food"></img>
          <div className="food-text">
            <h3 className="text1-food">{title}</h3>
            <p className="text2-food">
              <FaNutritionix className="iconCal" /> {Math.ceil(pricePerServing)}
            </p>
            {diets.map((diet, index) => (
              <h6 key={index} className="text3-food random-diet">
                {diet}
                <br />
              </h6>
            ))}
          </div>
          <p className="text4-food" onClick={() => setShowRecipe(!showRecipe)}>
            {showRecipe ? "Close" : "Read More"}{" "}
            {showRecipe ? (
              <BiBlock className="iconCloseLock" />
            ) : (
              <BiDownArrowCircle className="iconArrow" />
            )}{" "}
          </p>
          {showRecipe && (
            <SingleRandomData extendedIngredients={extendedIngredients} />
          )}
        </div>
      </div>
    </div>
  );
};

export default RandomDisplay;
