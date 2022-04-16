import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from "react-intl";
import { App } from './App';


let initLocale = "en";

const loadMessages = (locale) => {
  switch (locale) {
    case "en":
      return import("./lang/en.json");
    case "ru":
      return import("./lang/ru.json");
    case "zh":
      return import("./lang/zh.json");
    default:
      return import("./lang/en.json");
  }
};

const LocalizationWrapper = () => {
  const [locale, setLocale] = useState(initLocale);
  const [messages, setMessages] = useState(null);
  useEffect(() => {
    loadMessages(locale).then(setMessages);
  }, [locale]);

  return messages ? (
    <IntlProvider locale={locale} messages={messages}>
      <App locale={locale} onLocaleChange={(locale) => setLocale(locale)} />
    </IntlProvider>
  ) : null;
}
export default LocalizationWrapper;


ReactDOM.render(
  <React.StrictMode>
      <LocalizationWrapper />
  </React.StrictMode>,
  document.getElementById('root')
);
