import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

/** Build-time render so crawlers that skip JavaScript still get the page text. */
export const render = () => renderToString(<StrictMode><App /></StrictMode>);
