import React, {useState, useMemo} from "react";
import RecipeGridList from "./RecipeGridList";
import RecipeTableList from "./RecipeTableList";
import styles from "../css/recipe.module.css";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Icon from "@mdi/react";
import {mdiTable, mdiViewGridOutline, mdiMagnify} from "@mdi/js";

const ViewState = {
  BIG_GRID: 'big_grid',
  SMALL_GRID: 'small_grid',
  TABLE: 'table',
};

function RecipeList(props) {
  const [viewType, setViewType] = useState(ViewState.BIG_GRID);
  const [searchBy, setSearchBy] = useState("");

  const filteredRecipeList = useMemo(() => {
    return props.recipeList.filter((item) => {
      return (
          item.name
              .toLocaleLowerCase()
              .includes(searchBy.toLocaleLowerCase()) ||
          item.description.toLocaleLowerCase().includes(searchBy.toLocaleLowerCase())
      );
    });
  }, [props.recipeList, searchBy]);

  function handleSearch(event) {
    event.preventDefault();
    setSearchBy(event.target["searchInput"].value);
  }

  function handleSearchDelete(event) {
    if (!event.target.value) setSearchBy("");
  }

  function getChild(viewType) {
    return (
        <div className="container">
          {filteredRecipeList.length ? (
              <div className="container">
                <div className={"d-block d-md-none"}>
                  <RecipeGridList recipeList={filteredRecipeList} ingredientList={props.ingredientList}
                                  isBigCard={false}/>
                </div>
                <div className={"d-none d-md-block"}>
                  {switchView(viewType)}
                </div>
              </div>
          ) : (
              <div style={{margin: "16px auto", textAlign: "center"}}>
                Nejsou žádné recepty k zobrazení.
              </div>
          )}
        </div>
    );
  }

  function switchView(viewType) {
    switch (viewType) {
      case ViewState.BIG_GRID:
        return <RecipeGridList recipeList={filteredRecipeList} ingredientList={props.ingredientList} isBigCard={true}/>;
      case ViewState.SMALL_GRID:
        return <RecipeGridList recipeList={filteredRecipeList} ingredientList={props.ingredientList}
                               isBigCard={false}/>;
      case ViewState.TABLE:
        return <RecipeTableList recipeList={filteredRecipeList}/>;
      default:
        return <RecipeGridList recipeList={filteredRecipeList} isBigCard={true}/>;
    }
  }

  function switchViewType(viewType) {
    switch (viewType) {
      case ViewState.BIG_GRID:
        return ViewState.SMALL_GRID;
      case ViewState.SMALL_GRID:
        return ViewState.TABLE;
      case ViewState.TABLE:
        return ViewState.BIG_GRID;
      default:
        return ViewState.BIG_GRID;
    }
  }

  function chooseIcon(viewType) {
    switch (viewType) {
      case ViewState.BIG_GRID:
        return mdiViewGridOutline;
      case ViewState.SMALL_GRID:
        return mdiViewGridOutline;
      case ViewState.TABLE:
        return mdiTable;
      default:
        return mdiViewGridOutline;
    }
  }

  function chooseText(viewType) {
    switch (viewType) {
      case ViewState.BIG_GRID:
        return "Velká mřížka";
      case ViewState.SMALL_GRID:
        return "Malá mřížka";
      case ViewState.TABLE:
        return "Tabulka";
      default:
        return mdiViewGridOutline;
    }
  }

  return (
      <div>
        <Navbar collapseOnSelect expand="sm" bg="light">
          <div className="container-fluid">
            <Navbar.Brand>Seznam receptů</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse style={{justifyContent: "right"}}>
              <Form className="d-flex" onSubmit={handleSearch}>
                <Form.Control
                    id={"searchInput"}
                    style={{maxWidth: "150px"}}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={handleSearchDelete}
                />
                <Button
                    style={{marginRight: "8px"}}
                    variant="outline-success"
                    type="submit"
                >
                  <Icon size={1} path={mdiMagnify}/>
                </Button>
              </Form>
              <Button
                  className={"d-none d-md-block"}
                  variant="outline-primary"
                  onClick={() =>
                      setViewType((currentState) => {
                        return switchViewType(currentState);
                      })
                  }
              >
                <Icon size={1} path={chooseIcon(viewType)}/>{" "}
                {chooseText(viewType)}
              </Button>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <div className={styles.recipeList}>
          {getChild(viewType)}
        </div>
      </div>
  );
}

export default RecipeList;
