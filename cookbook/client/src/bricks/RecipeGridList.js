import React from "react";
import RecipeBigCard from "./RecipeBigCard";
import RecipeSmallCard from "./RecipeSmallCard";


class RecipeGridList extends React.Component {
  render() {
    function getRecipeList(recipeList, isBigCard) {
      return recipeList.map((recipe) => {
        if (isBigCard) {
          return <RecipeBigCard key={recipe.id} recipe={recipe}/>;
        } else {
          return <RecipeSmallCard key={recipe.id} recipe={recipe}/>;
        }
      });
    }

    return getRecipeList(this.props.recipeList, this.props.isBigCard);
  }
}

export default RecipeGridList;
