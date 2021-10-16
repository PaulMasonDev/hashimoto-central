import React, { useState } from "react";
import { SearchBox } from "./SearchBox";
import { Grid, Typography } from "@material-ui/core";
import { RecipeDisplay } from "./RecipeDisplay";

export const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipeArray, setRecipeArray] = useState([]);
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h1">Hashimotos Central</Typography>
      </Grid>
      <Grid item>
        <SearchBox
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setRecipeArray={setRecipeArray}
        />
      </Grid>
      <Grid item>
        <RecipeDisplay searchTerm={searchTerm} recipeArray={recipeArray} />
      </Grid>
    </Grid>
  );
};
