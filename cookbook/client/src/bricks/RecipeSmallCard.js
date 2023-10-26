import React from "react";
import Card from "react-bootstrap/Card";
import Icon from "@mdi/react";
import {mdiChefHat, mdiReceipt} from "@mdi/js";
import styles from "../css/recipe.module.css";
import {shortenText} from "../helpers/common";

class RecipeSmallCard extends React.Component {

  render() {


    return (
        <div className={styles.smallRecipe}>
          <Card className={styles.smallRecipeCard}>
            <Card.Body className={styles.smallRecipeBody}>
              <div>
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
                    {shortenText(this.props.recipe.description, 70)}
                    <ul className={styles.ingredientsList}>
                      {this.props.recipe.ingredients.slice(0, 5).map((ingredient) =>{
                            const foundIngredient = this.props.ingredientList.find((ingredientInList)=>ingredientInList.id === ingredient.id);
                            return <li key={foundIngredient.id}>{foundIngredient.name}</li>;
                          }
                      )}
                      {this.props.recipe.ingredients.length > 5 && <li>...</li>}
                    </ul>
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
