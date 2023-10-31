import React from "react";
import Table from "react-bootstrap/Table";
import {shortenText} from "../helpers/common";
import Icon from "@mdi/react";
import {mdiPencilOutline} from "@mdi/js";

function RecipeTableList(props) {
  return (<Table>
        <thead>
        <tr>
          <th>Název receptu</th>
          <th>Popis receptu</th>
        </tr>
        </thead>
        <tbody>
        {props.recipeList.map((recipe) => {
          return (<tr key={recipe.id}>
                <td>{recipe.name}</td>
                <td>{shortenText(recipe.description, 240)}</td>
                <td>
                  <Icon
                      size={0.8}
                      path={mdiPencilOutline}
                      style={{color: 'orange', cursor: 'pointer'}}
                      onClick={() => props.handleAddRecipeShow(recipe)}
                  />
                </td>
              </tr>);
        })}
        </tbody>
      </Table>);
}

export default RecipeTableList;
