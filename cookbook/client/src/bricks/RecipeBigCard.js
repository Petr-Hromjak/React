import React from "react";
import Card from "react-bootstrap/Card";
import Icon from "@mdi/react";
import {mdiChefHat, mdiPencilOutline, mdiReceipt} from "@mdi/js";
import styles from "../css/recipe.module.css";

class RecipeBigCard extends React.Component {
  render() {
    return (
        <div className={styles.bigRecipe}>
          <Card className={styles.bigRecipeCard}>
            <Card.Header>
              <Icon
                  size={0.8}
                  path={mdiPencilOutline}
                  style={{ color: 'orange', cursor: 'pointer' }}
                  onClick={() => this.props.handleAddRecipeShow(this.props.recipe)}
              />
            </Card.Header>
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
