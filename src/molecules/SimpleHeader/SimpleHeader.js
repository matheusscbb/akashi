import React from "react";

import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "relative",
    zIndex: 4,

    height: 60,
    padding: "0 20px",
    backgroundColor: theme.palette.primary.main,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& a": {
      color: theme.palette.primary.contrastText,
      textDecoration: "none",
      fontSize: "2em",
    },
  },
}));

const SimpleHeader = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <nav>
        <Link to="/">NumDeck</Link>
      </nav>
    </header>
  );
};

export default SimpleHeader;
