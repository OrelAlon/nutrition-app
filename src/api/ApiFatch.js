import axios from "axios";

export async function fetchFoodSearch(searchFood) {
  const fixSpaceStr = searchFood.replace(/\s+/g, "%20");

  const { data } = await axios.get(
    `https://api.edamam.com/api/food-database/v2/parser?ingr=${fixSpaceStr}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
  );
  return data;
}

export async function fetchRecipeSearch(recipeSearch) {
  const data = await axios.get(
    `https://api.edamam.com/search?q=${recipeSearch}&app_id=${process.env.REACT_APP_RECIPE_API_ID}&app_key=${process.env.REACT_APP_RECIPE_API_KEY}`
  );
  return data;
}

export async function fetchRandomSearch() {
  const data = await axios.get(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RANDOM_KEY}&number=1`
  );

  return data;
}
