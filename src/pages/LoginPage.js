import React, { useContext, useState } from "react";
import { useTranslation } from 'react-i18next';

import { makeStyles, Container, Grid, Typography } from "@material-ui/core";

import LanguageSelector from "../molecules/LanguageSelector/LanguageSelector";
import SelectorComponent from "../atoms/SelectorComponent/SelectorComponent";
import InputComponent from "../atoms/InputComponent/InputComponent";
import ButtonCompoent from "../atoms/ButtonComponent/ButtonComponent";
import { ThemeContext } from "../theme/ThemeSelector";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.background.default,
    height: '100%'
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { changeTheme } = useContext(ThemeContext);

  const [color, setColor] = useState('default');

  const onColorChange = (e) => {
    setColor(e.target.value);
    changeTheme(e.target.value);
  }

  return (
    <div className={classes.main}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}> 
            <Typography variant="h1">Login pages</Typography>
          </Grid>
          <Grid item xs={6}> 
            <Typography variant="h3">{t('title')}</Typography>
          </Grid>
          <Grid item xs={6}> 
            <Typography variant="h3">Login pages</Typography>
          </Grid>

          <Grid item xs={6}> 
            <LanguageSelector />
          </Grid>

          <Grid item xs={6}> 
            <SelectorComponent
              name="colors"
              data={
                [
                  {value: "default", id: 'default'},
                  {value: "dark", id: 'dark'}
                ]
              }
              selected={color}
              onChangeHandler={onColorChange}
              translatePrefix="selector.theme"
            />
          </Grid>

          <Grid item xs={6}> 
            <InputComponent />
          </Grid>

          <Grid item xs={12}> 
            <ButtonCompoent>oi</ButtonCompoent>
          </Grid>
        </Grid>
        
      </Container>
    </div>
  );
};

export default LoginPage;
