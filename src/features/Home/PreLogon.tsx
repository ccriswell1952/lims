import React from "react";
import { Box, Grid } from "@mui/material";

const PreLogin = () => {
  return (
    <div className="home">
      <Box>
        <Grid container spacing={3} rowSpacing={3}>
          <Grid item xs={12}>
            <h2>LIMS</h2>
          </Grid>
          <Grid item xs={12}>
            <p>
              Content for first page user sees before being logged on goes here.
              Click the <b>Log On</b> link above to go to log onto LIMS.
            </p>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default PreLogin;
