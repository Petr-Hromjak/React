import React from "react";
import Card from "react-bootstrap/Card";
import Icon from "@mdi/react";
import {mdiChefHat, mdiReceipt} from "@mdi/js";
import styles from "../css/recipe.module.css";

class RecipeSmallCard extends React.Component {

  render() {
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

      const lastChar = result.at(result.length - 1);
      if (lastChar === '.' || lastChar === ',') {
        result = result.substring(0, result.length - 1)
      }

      return result + " ..."
    }

    return (
        <div className={styles.smallRecipe}>
          <Card className={styles.smallRecipeCard}>
            <Card.Body className={styles.smallRecipeBody}>
              <div /*className={styles.recipeContent}*/>
                <h2 className={styles.smallRecipeName}>
                  <Icon path={mdiChefHat} size={1} color="grey"/>{" "}
                  {this.props.recipe.name}
                </h2>
                <img alt={this.props.recipe.name} src={this.props.recipe.imgUri} className={styles.smallRecipeImage}/>
                <div className={styles.recipeDescription}>
                  <div className={styles.smallRecipeDescriptionIcon}>
                    <Icon path={mdiReceipt} size={1} color="grey"/>{" "}
                  </div>
                  <div className={styles.smallRecipeDescriptionText}>
                    {shortenDescription(this.props.recipe.description, 80)}
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
    );
  }
}

export default RecipeSmallCard;
