import { Grid, Typography } from "@material-ui/core";
import React from "react";

export const LinkDisplay = ({ searchTerm }) => {
  return (
    <Grid item>
      <Typography variant="h3">Link Display</Typography>
      <Typography variant="body1">{searchTerm}</Typography>
    </Grid>
  );
};
