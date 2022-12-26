import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SubApp from "./components/SubApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SubApp />
    {/*<App />*/}
  </React.StrictMode>,
);
