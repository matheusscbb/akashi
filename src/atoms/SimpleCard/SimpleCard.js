import React from "react";

import { makeStyles, Card, CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 24,
    backgroundColor: theme.palette.primary.main,
  }
}));

const SimpleCard = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <Card>
      <CardContent className={classes.container}>{children}</CardContent>
    </Card>
  );
};

export default SimpleCard;
