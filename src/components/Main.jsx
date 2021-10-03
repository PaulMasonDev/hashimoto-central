import React, { useState } from "react";
import { SearchBox } from "./SearchBox";
import { Grid, Typography } from "@material-ui/core";
import { LinkDisplay } from "./LinkDisplay";

export const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h1">Hashimotos Central</Typography>
      </Grid>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <LinkDisplay searchTerm={searchTerm} />
    </Grid>
  );
};
