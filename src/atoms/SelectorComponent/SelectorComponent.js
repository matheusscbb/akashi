import React from "react";
import { useTranslation } from 'react-i18next';

import {
    makeStyles,
    Select,
    MenuItem,
    FormControl,
    InputLabel
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const SelectorComponent = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { name, data, selected, onChangeHandler, translatePrefix, hasLabel = true } = props;

  const localId = name.replace(/\s/g, '');

  return (
    <FormControl className={classes.formControl}>
      {hasLabel && <InputLabel id={`${localId}-select-label`}>
        {t(`${translatePrefix}.name`)}
      </InputLabel>}

      <Select
        labelId={`${localId}-select-label`}
        id={localId}
        value={selected}
        onChange={(e) => onChangeHandler(e)}
      >
        {data.map((item, idx) => <MenuItem value={item.id} key={`${localId}-${idx}`}>
          {t(`${translatePrefix}.${item.value.replace(/\s/g, '')}`)}
        </MenuItem>)}
      </Select>
    </FormControl>
  );
};

export default SelectorComponent;
