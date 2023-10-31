import React from "react";
import Card from "react-bootstrap/Card";
import Icon from "@mdi/react";
import {mdiChefHat, mdiPencilOutline, mdiReceipt} from "@mdi/js";
import {shortenText} from "../helpers/common";

class RecipeSmallCard extends React.Component {

  render() {


    return (<Card>
      <Card.Header>
        <Icon
            size={0.8}
            path={mdiPencilOutline}
            style={{ color: 'orange', cursor: 'pointer' }}
            onClick={() => this.props.handleAddRecipeShow(this.props.recipe)}
        />
      </Card.Header>
      <Card.Img className="card-img-top" alt={this.props.recipe.name} src={this.props.recipe.imgUri}/>
      <Card.Body >
        <Card.Title>
          <div className="row no-gutters px-3">
            <div className="col-2 p-1">
              <Icon className="vertical-align-text-bottom" path={mdiChefHat} size={1} color="grey"/>
            </div>
            <div className="col-10 p-1">
              {this.props.recipe.name}
            </div>
          </div>
        </Card.Title>
        <Card.Text >
          <div className="row no-gutters px-3">
            <div className="col-2 p-1">
              <Icon className="vertical-align-text-bottom" path={mdiReceipt} size={1} color="grey"/>
            </div>
            <div className="col-10 p-1">
              {shortenText(this.props.recipe.description, 70)}
            </div>
          </div>
        </Card.Text>
        <ul className="list-group">
          {this.props.recipe.ingredients.slice(0, 5).map((ingredient) => {
            const foundIngredient = this.props.ingredientList.find((ingredientInList) => ingredientInList.id === ingredient.id);
            return <li className="list-group-item" key={foundIngredient.id}>{foundIngredient.name}</li>;
          })}
          {this.props.recipe.ingredients.length > 5 && <li className="list-group-item">atd.</li>}
        </ul>
      </Card.Body>
    </Card>);
  }
}

export default RecipeSmallCard;
