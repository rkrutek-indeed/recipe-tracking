import React, { useState } from "react";
import "./RecipeCreate.css"

function RecipeCreate({addNewRecipe}) {
  const initialRecipeState = {name:"", cuisine:"", photo:"", ingredients:"", preparation:""}
  const [newRecipe, setNewRecipe] = useState(initialRecipeState)
  
  function onSubmit(event) {
    event.preventDefault(); // prevent default submit behavior
    addNewRecipe(newRecipe)
    setNewRecipe(initialRecipeState)
  }
  
  function onChange(event) {
    const { name, value } = event.target;
    setNewRecipe({
      ...newRecipe,
      [name]: value,
    });
  }
  
  return (
    <form name="create" onSubmit={onSubmit}>
      <table style={{color: "yellow"}}>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                placeholder="Name"
                type="text"
                name="name"
                required={true}
                onChange={onChange}
                value={newRecipe.name}
              />
            </td>
            <td>
              <input
                id="cuisine"
                placeholder="Cuisine"
                type="text"
                name="cuisine"
                required={true}
                onChange={onChange}
                value={newRecipe.cuisine}
              />
            </td>
            <td>
              <input
                id="photo"
                placeholder="URL"
                type="text"
                name="photo"
                required={true}
                onChange={onChange}
                value={newRecipe.photo}
              />
            </td>
            <td>
              <textarea 
                name="ingredients" 
                placeholder="Ingredients"
                rows={2}
                required={true}
                onChange={onChange}
                value={newRecipe.ingredients}    
             />
            </td>
            <td>      
              <textarea 
                name="preparation" 
                placeholder="Preparation" 
                rows={2} 
                required={true}
                onChange={onChange}
                value={newRecipe.preparation}    
                />         
            </td>
            <td>
              <button type="submit" >Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
