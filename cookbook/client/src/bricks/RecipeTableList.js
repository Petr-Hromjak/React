import React from "react";
import Table from "react-bootstrap/Table";

function RecipeTableList(props) {

  function shortenDescription(inputString, maxLength) {
    if (inputString.length <= maxLength) {
      return inputString; // No need to truncate
    }

    let result;
    const lastSpaceIndex = inputString.lastIndexOf(' ', maxLength);
    if (lastSpaceIndex !== -1) {
      result = inputString.substring(0, lastSpaceIndex);
    } else {
      result = inputString.substring(0, maxLength);
    }

    const lastChar = result.at(result.length-1);
    if (lastChar === '.' || lastChar === ','){
      result = result.substring(0, result.length-1)
    }

    return result + " ..."
  }

  return (
      <Table>
        <thead>
        <tr>
          <th>Název receptu</th>
          <th>Popis receptu</th>
        </tr>
        </thead>
        <tbody>
        {props.recipeList.map((recipe) => {
          return (
              <tr key={recipe.id}>
                <td>{recipe.name}</td>
                <td>{shortenDescription(recipe.description,240)}</td>
              </tr>
          );
        })}
        </tbody>
      </Table>
  );
}

export default RecipeTableList;
