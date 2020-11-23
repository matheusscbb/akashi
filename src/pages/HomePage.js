import React from "react";

import { makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.primary.dark,
  },
  grid: {
    paddingTop: 64,
    paddingBottom: 64,
    display: "grid",
    gap: "32px 32px",
    gridTemplateColumns: "352px auto",
    gridTemplateRows: "432px 156px",

    "& > section": {
      gridRow: "1 / 3",
      gridColumn: "2",
    },

    "& .MuiPaper-root": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Container className={classes.grid} maxWidth="lg">
        Teste
      </Container>
    </div>
  );
};

export default HomePage;
