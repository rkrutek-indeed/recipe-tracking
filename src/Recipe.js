import React from "react";

function Recipe({recipe, deleteRecipe, index}) {
  
  const onClick = (event) => {
    deleteRecipe(index);
  };
  
  return (
    <tr key={index}>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td> <img src={recipe.photo} /></td>
<td className="content_td"><p>{(recipe.ingredients)}</p></td>
      <td className="content_td"><p>{(recipe.preparation)}</p></td>
      <td>
        <button name="delete" onClick={() => onClick(index)}>
          Delete
      </button>
      </td>
    </tr>
  );
}

export default Recipe;