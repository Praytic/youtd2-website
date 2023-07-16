import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserTracing, init } from "@sentry/react";

init({
  dsn: "https://2c45aced288f448c80f8fb8d682c341c@o4505518956675072.ingest.sentry.io/4505518957658113",
  integrations: [
    new BrowserTracing()
  ],
  release: "youtd2@" + process.env.npm_package_version,
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
 });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
