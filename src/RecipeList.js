import React from "react";
import "./RecipeList.css"
import Recipe from "./Recipe.js";

function RecipeList({recipes, deleteRecipe}) { 
    
  const onClick = (index) => {
    deleteRecipe(index);
  };

  const rows = recipes.map((recipe, index) => (
      <Recipe recipe={recipe} deleteRecipe={deleteRecipe} index={index}/>
  ));
  
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
