import React from "react";

import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {

  },
}));

const InputComponent = (props) => {
  const { key, keyEnum } = props;
  const classes = useStyles();

  return (
    <TextField className={classes.container} color="secondary" />
  );
};

export default InputComponent;
