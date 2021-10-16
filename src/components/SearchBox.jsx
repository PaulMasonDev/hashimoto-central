import React from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import axios from "axios";

export const SearchBox = (props) => {
  const getData = async () => {
    const response = await axios.get(`/getLinkList/${props.searchTerm}`);
    props.setRecipeArray(response.data);
  };

  return (
    <Grid item container spacing={2} direction="column">
      <Grid item>
        <Typography variant="h2">Search Ingredient</Typography>
      </Grid>
      <Grid item container justifyContent="center">
        <TextField
          variant="outlined"
          value={props.searchTerm}
          onChange={(e) => props.setSearchTerm(e.target.value)}
        ></TextField>
        <Button variant="contained" color="primary" onClick={getData}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};
