import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

import SelectorComponent from "../../atoms/SelectorComponent/SelectorComponent";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    setLanguage(event.target.value);
  };

  const languageData = [
    {id: 'en', value: 'en'},
    {id: 'ptBR', value: 'ptBr'}
  ]

  return (
    <SelectorComponent
      name="colors"
      hasLabel={false}
      data={languageData}
      selected={language}
      onChangeHandler={changeLanguage}
      translatePrefix="components.languageSelector"
    />
  );
};

export default LanguageSelector;
