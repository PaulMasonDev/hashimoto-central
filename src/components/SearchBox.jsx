import React from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import axios from "axios";

export const SearchBox = ({ searchTerm, setSearchTerm }) => {
  const getData = async () => {
    const response = await axios.get(`/getLinkList/${searchTerm}`);
    console.log(response.data);
  };

  return (
    <Grid item>
      <Typography variant="h2">Search Ingredient</Typography>
      <TextField
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></TextField>
      <Button variant="contained" onClick={getData}>
        Submit
      </Button>
    </Grid>
  );
};
