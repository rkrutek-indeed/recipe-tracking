import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  function addNewRecipe(recipe) {
    setRecipes([...recipes, recipe]);
  }
  
  function deleteRecipe(indexToDelete) {
      const filteredRecipes = recipes.filter((_, index) => index !== indexToDelete);
      setRecipes(filteredRecipes);
  }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addNewRecipe={addNewRecipe} />
    </div>
  );
}

export default App;
