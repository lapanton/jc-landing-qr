import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { App } from "./App";

const initLocale = () => {
  if (
    navigator.language.substr(0, 2) === "ru" &&
    !window.location.href.includes("https://jewelcocktail.com/i/")
  ) {
    return "ru";
  } else {
    return "en";
  }
};

const loadMessages = (locale) => {
  switch (locale) {
    case "en":
      return import("./lang/en.json");
    case "ru":
      return import("./lang/ru.json");
    case "zh":
      return import("./lang/zh.json");
    default:
      return import("./lang/ru.json");
  }
};

const LocalizationWrapper = () => {
  const [locale, setLocale] = useState("ru");
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    loadMessages(locale).then(setMessages);
  }, [locale]);

  return messages ? (
    <IntlProvider locale={locale} messages={messages}>
      <App locale={locale} onLocaleChange={(locale) => setLocale(locale)} />
    </IntlProvider>
  ) : null;
};
export default LocalizationWrapper;

ReactDOM.render(
  <React.StrictMode>
    <LocalizationWrapper />
  </React.StrictMode>,
  document.getElementById("root"),
);
