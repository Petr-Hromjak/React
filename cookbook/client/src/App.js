import "./App.css";
import CookbookInfo from "./bricks/CookbookInfo";
import RecipeList from "./bricks/RecipeList";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from "react";
import Icon from "@mdi/react";
import {mdiLoading} from "@mdi/js";
import styles from "./css/cookbook.module.css";

const CallState = {
  PENDING: 'pending',
  SUCCESS: 'success',
  ERROR: 'error',
};

const cookbook = {
  name: "Rychlé a chutné večeře",
};

function App() {
  const [recipeListCall, setRecipeListCall] = useState({
    state: CallState.PENDING,
  });
  const [ingredientListCall, setIngredientListCall] = useState({
    state: CallState.PENDING,
  });

  useEffect(() => {
    fetch(`http://localhost:3000/recipe/list`, {
      method: "GET",
    }).then(async (response) => {
      const responseJson = await response.json();
      if (response.status >= 400) {
        setRecipeListCall({state: CallState.ERROR, error: responseJson});
      } else {
        setRecipeListCall({state: CallState.SUCCESS, data: responseJson});
      }
    });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/ingredient/list`, {
      method: "GET",
    }).then(async (response) => {
      const responseJson = await response.json();
      if (response.status >= 400) {
        setIngredientListCall({state: CallState.ERROR, error: responseJson});
      } else {
        setIngredientListCall({state: CallState.SUCCESS, data: responseJson});
      }
    });
  }, []);

  function getChild() {
    if (recipeListCall.state === CallState.SUCCESS && ingredientListCall.state === CallState.SUCCESS) {
      return (
          <div className={styles.cookbookPage}>
            <CookbookInfo cookbook={cookbook}/>
            <RecipeList recipeList={recipeListCall.data} ingredientList = {ingredientListCall.data}/>
          </div>
      );
    } else if (recipeListCall.state === CallState.ERROR || ingredientListCall.state === CallState.ERROR) {
      return (
          <div className={styles.error}>
            <div>Nepodařilo se načíst recepty nebo ingredience.</div>
            <br/>
            <pre>{JSON.stringify(recipeListCall.error + " " + ingredientListCall.error, null, 2)}</pre>
          </div>
      );
    } else {
      return (
          <div className={styles.loading}>
            <Icon size={2} path={mdiLoading} spin={true}/>
          </div>
      );
    }
  }

  return (
      <div className="App">
        {getChild()}
      </div>
  );
}

export default App;
