import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from "react-intl";
import { App } from './App';


let initLocale = "ru";

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
  const [locale, setLocale] = useState(initLocale);
  const [messages, setMessages] = useState(null);

  // получаем IP-адрес пользователя
  const userIP = async () => {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  };

// определяем регион по IP
  const getUserRegion = useCallback(async () => {
    const ip = await userIP();
    const response = await fetch(`https://ipinfo.io/${ip}?token=77e7d0b7132fbc`);
    const data = await response.json();
    const cisCountries = ['RU', 'UA', 'BY', 'KZ', 'KG', 'TJ', 'TM', 'UZ', 'AM', 'AZ', 'MD'];
    if (cisCountries.includes(data.country)) {
      localStorage.setItem('set_language', 'ru');
      setLocale("ru")
      return  "ru";
    } else {
      localStorage.setItem('set_language', 'en');
      setLocale("en")
      return "en";
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('set_language')) {
      loadMessages(locale).then(setMessages);
    } else {
      getUserRegion().then((lang) => {
        loadMessages(lang).then(setMessages);
        setLocale(lang);
      })
    }
  }, [locale, getUserRegion]);

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
