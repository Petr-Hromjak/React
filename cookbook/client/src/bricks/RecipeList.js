import React from "react";
import Recipe from "./Recipe";

class RecipeList extends React.Component {
  render() {
    function getRecipeList(recipeList) {
      return recipeList.map((recipe) => {
        return <Recipe key={recipe.id} recipe={recipe} />;
      });
    }

    return getRecipeList(this.props.recipeList);
  }
}

export default RecipeList;
