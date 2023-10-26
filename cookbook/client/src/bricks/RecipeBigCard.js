import React from "react";
import Card from "react-bootstrap/Card";
import Icon from "@mdi/react";
import {mdiChefHat, mdiReceipt} from "@mdi/js";
import styles from "../css/recipe.module.css";

class RecipeBigCard extends React.Component {
  render() {
    return (
        <div className={styles.bigRecipe}>
          <Card className={styles.bigRecipeCard}>
            <Card.Body className={styles.bigRecipeBody}>
              <div className={styles.recipeContent}>
                <h2 className={styles.bigRecipeName}>
                  <Icon path={mdiChefHat} size={1} color="grey"/>{" "}
                  {this.props.recipe.name}
                </h2>
                <div className={styles.recipeDescription}>
                  <div className={styles.bigRecipeDescriptionIcon}>
                    <Icon path={mdiReceipt} size={1} color="grey"/>{" "}
                  </div>
                  <div className={styles.bigRecipeDescriptionText}>
                    {this.props.recipe.description}
                  </div>
                </div>
              </div>
              <img alt={this.props.recipe.name} src={this.props.recipe.imgUri} className={styles.bigRecipeImage}/>
            </Card.Body>
          </Card>
        </div>
    );
  }
}

export default RecipeBigCard;
