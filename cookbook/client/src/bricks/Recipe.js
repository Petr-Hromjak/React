import React from "react";
import Card from "react-bootstrap/Card";
import Icon from "@mdi/react";
import { mdiChefHat, mdiReceipt } from "@mdi/js";
import styles from "../css/recipe.module.css";

class Recipe extends React.Component {
  render() {
    return (
        <Card className={styles.recipe}>
            <Card.Body className={styles.recipeBody}>
              <div className={styles.recipeContent}>
                <h2 className={styles.recipeName}>
                <Icon path={mdiChefHat} size={1} color="grey" />{" "}
                {this.props.recipe.name}
              </h2>
              <div className={styles.recipeDescription}>
                <div className={styles.recipeDescriptionIcon}>
                  <Icon path={mdiReceipt} size={1} color="grey" />{" "}
                </div>
                <div className={styles.recipeDescriptionText}>
                  {this.props.recipe.description}
                </div>
              </div>
              </div>
              <img alt={this.props.recipe.name} src={this.props.recipe.imgUri} className={styles.recipeImage}/>


            </Card.Body>
        </Card>
    );
  }
}

export default Recipe;
