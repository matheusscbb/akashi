import React from "react";

import TextField from '@material-ui/core/TextField';

const InputComponent = (props) => {
  // variants can be ["standard","filled","outlined"];
  // colors can be ["primary","secondary"];
  // see more: https://material-ui.com/pt/components/text-fields/#text-field.
  const {
    value,
    onChangehandler,
    hasError = false,
    label = "",
    helperText = "",
    variant = "standard",
    color="secondary",
    disabled = false
  } = props;

  return (
    <TextField
      color={color}
      value={value}
      onChange={onChangehandler}
      error={hasError}
      id={`${label}-input-text`}
      label={label}
      helperText={helperText}
      variant={variant}
      disabled={disabled}
    />
  );
};

export default InputComponent;
