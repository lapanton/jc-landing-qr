import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { App } from "./App";

// Force locale to "en"
const locale = "en";

const loadMessages = () => {
  return import("./lang/en.json");
};

const LocalizationWrapper = () => {
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    loadMessages().then(setMessages);
  }, []);

  return messages ? (
    <IntlProvider locale={locale} messages={messages}>
      <App locale={locale} onLocaleChange={() => {}} />
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
