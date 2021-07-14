import { createContext, useState } from "react";

import MensajesEs from "../Lang/es.json";
import MensajesEn from "../Lang/en.json";
import { IntlProvider } from "react-intl";

import { getSingleValue } from "../helpers/getLocalStorage";

import { useEffect } from "react";

export type ControlMessage = {
  setLanguage: (language: string) => void;
};

const contextValue: ControlMessage = {
  setLanguage: () => {},
};

const langContext = createContext<ControlMessage>(contextValue);

const LangProvider = ({ children }: { children: JSX.Element }) => {
  let localeByDefault;
  let mensajeByDefault;

  const lang = getSingleValue("lang");
  // const lang = localStorage.getItem('lang');

  if (lang) {
    localeByDefault = lang;

    if (lang === "es") {
      mensajeByDefault = MensajesEs;
    } else if (lang === "en") {
      mensajeByDefault = MensajesEn;
    } else {
      localeByDefault = "en";
      mensajeByDefault = MensajesEn;
    }
  } else {
    localeByDefault = "en";
    // mensajeByDefault = MensajesIngles;
  }

  const [mensaje, setMensaje] = useState(mensajeByDefault);
  const [locale, setLocale] = useState(localeByDefault);

  //Sin usar los valores en localstorage
  // const [mensaje, setMensaje] = useState(MensajesIngles);
  // const [locale, setLocale] = useState('en-US');

  //Esta funcion esta disponible en todos lados y se usa en el header para cambiar los estados de los idiomas
  const setLanguage = (language: string) => {
    switch (language) {
      case "es":
        setMensaje(MensajesEs);
        setLocale("es");
        localStorage.setItem("lang", "es");
        break;
      case "en":
        setMensaje(MensajesEn);
        setLocale("en");
        localStorage.setItem("lang", "en");
        break;

      default:
        setMensaje(MensajesEn);
        setLocale("en");
        localStorage.setItem("lang", "en");
    }
  };

  useEffect(() => {
    setLanguage("en");
  }, []);

  return (
    //se pasa destructurado
    <langContext.Provider value={{ setLanguage }}>
      <IntlProvider locale={locale} messages={mensaje} defaultLocale={"en"}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};

export { langContext, LangProvider };
