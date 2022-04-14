import axios from "axios";

export async function fetchFoodSearch(searchFood) {
  const API_ID = "a9080630";
  const API_KEY = "016eaef3bd150a51f2c3ff54fe5b5ccd";
  // const API_ID = process.env.REACT_APP_API_ID;
  // const API_KEY = process.env.REACT_APP_API_KEY;
  // console.log(API_ID);
  // console.log(API_KEY);
  const fixSpaceStr = searchFood.replace(/\s+/g, "%20");

  const { data } = await axios.get(
    `https://api.edamam.com/api/food-database/v2/parser?ingr=${fixSpaceStr}&app_id=${API_ID}&app_key=${API_KEY}`
  );
  return data;
}

export async function fetchRecipeSearch(recipeSearch) {
  const APP_ID = "32fb80e5";
  const APP_KEY = "5c11e1a66466f2dcfda69eddc5d113ef";
  // const query = 'pizza';
  // const fixSpaceStr = searchFood.replace(/\s+/g, '%20');

  const data = await axios.get(
    `https://api.edamam.com/search?q=${recipeSearch}&app_id=${APP_ID}&app_key=${APP_KEY}`
  );
  // console.log(data);
  return data;
}
