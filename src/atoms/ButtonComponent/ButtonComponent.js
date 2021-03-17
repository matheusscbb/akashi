import React from "react";

import { Button, CircularProgress } from "@material-ui/core";

const ButtonCompoent = (props) => {
  // variants can be ["contained","outlined","text"];
  // colors can be ["default","inherit","primary","secondary"];
  // see more: https://material-ui.com/pt/components/buttons/#button.
  const {
    loading = false,
    variant = "contained",
    color = "secondary",
    onClick,
    disabled = false,
  } = props;

  return (
    <Button
      onClick={onClick}
      variant={variant}
      color={color}
      disabled={loading || disabled}
    >
      {props.children}
      {loading ? (
        <CircularProgress
          style={{ marginLeft: 6 }}
          thickness={6}
          size={16}
          variant={variant}
          color={color}
        />
      ) : (
        ""
      )}
    </Button>
  );
};

export default ButtonCompoent;
