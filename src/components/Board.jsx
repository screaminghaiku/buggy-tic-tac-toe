import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Squares from "./Squares";

// Custom Style
const useStyles = makeStyles(theme => ({
  board: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(80),
      height: theme.spacing(80)
    }
  }
}));

// Component
const Board = props => {
  const classes = useStyles();

  return (
    <Paper className={classes.board} elevation={3}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Squares />
      </Grid>
    </Paper>
  );
};

export default Board;
