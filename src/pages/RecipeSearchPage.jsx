import { useState } from "react";
import { Link } from "react-router-dom";
import { fetchRecipeSearch, fetchRandomSearch } from "../api/ApiFatch";

import ResipesDisplay from "../components/recipes/ResipesDisplay";
import RandomDisplay from "../components/recipes/RandomDisplay";
import Spinner from "../components/Spinner";

import { ImSearch } from "react-icons/im";
import { BiCalendarWeek } from "react-icons/bi";
import { GiCardRandom } from "react-icons/gi";

import "../components/css/recipeSearch.css";

const RecipeSearchPage = () => {
  const [recipeSearch, setRecipeSearch] = useState("");
  const [randomSearch, setRandomSearch] = useState([]);
  const [showRandom, setShowRandom] = useState(false);
  const [recipeHits, setRecipeHits] = useState([]);
  const [errorMsg, setErrorMsg] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSearchRecipe = async () => {
    setShowRandom(false);
    setRandomSearch([]);
    setRecipeHits([]);
    setIsLoading(true);

    try {
      setIsLoading(true);

      const { data } = await fetchRecipeSearch(recipeSearch);
      if (!data.more) {
        return setErrorMsg("Sorry but there is no such name");
      }
      setErrorMsg("");
      const recipeHits = data.hits.slice(0, 3);
      setRecipeHits(recipeHits);
      setIsLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  const onRandomRecipe = async () => {
    setRecipeHits([]);
    setRecipeSearch("");
    setIsLoading(true);

    try {
      setIsLoading(true);

      const { data } = await fetchRandomSearch();
      if (!data) {
        return setErrorMsg("Try again");
      }
      setErrorMsg("");
      const randomSearch = data.recipes;
      setRandomSearch(randomSearch);
      setShowRandom(true);
      setIsLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <div className="title">
        <h1 className="dayTitle">Cook an idea...</h1>
      </div>
      <div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search your Recipe here..."
            value={recipeSearch}
            onChange={(event) => setRecipeSearch(event.target.value)}
          ></input>
          <span href="#" className="btn">
            <ImSearch className="fa " onClick={onSearchRecipe} />
          </span>
          <span href="#" className="btn">
            <GiCardRandom className="fa " onClick={onRandomRecipe} />
          </span>
          <Link to="/weeklyDayPage">
            <span href="#" className="btn">
              <BiCalendarWeek className="fa " />
            </span>
          </Link>
        </div>
      </div>
      <div>
        {isLoading && <Spinner />}
        {errorMsg.length > 0 && <div className="errorMsg">{errorMsg}</div>}
        {recipeHits.map((recipe, index) => (
          <ResipesDisplay key={index} recipe={recipe} />
        ))}
        {showRandom && <RandomDisplay randomSearch={randomSearch} />}
      </div>
    </div>
  );
};

export default RecipeSearchPage;
