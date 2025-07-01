import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { App } from "./App";

// Async function to detect IP-based locale
const detectLocale = async () => {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    const isFromRussia = data.country_code === "RU";

    if (isFromRussia && !window.location.href.includes("jewelcocktail.ru")) {
      window.location.href = "https://jewelcocktail.ru/ru/";
      return "ru"; // This will not matter because it redirects
    }

    return data.languages?.startsWith("ru") ? "ru" : "en";
  } catch (err) {
    console.error("GeoIP detection failed:", err);
    // Fallback: check browser language
    return navigator.language.startsWith("ru") ? "ru" : "en";
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
  const [locale, setLocale] = useState(null);
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    detectLocale().then((locale) => {
      setLocale(locale);
    });
  }, []);

  useEffect(() => {
    if (locale) {
      loadMessages(locale).then(setMessages);
    }
  }, [locale]);

  return messages ? (
    <IntlProvider locale={locale} messages={messages}>
      <App locale={locale} onLocaleChange={setLocale} />
    </IntlProvider>
  ) : null;
};

export default LocalizationWrapper;

ReactDOM.render(
  <React.StrictMode>
    <LocalizationWrapper />
  </React.StrictMode>,
  document.getElementById("root")
);
