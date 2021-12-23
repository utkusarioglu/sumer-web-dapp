/// <reference path="./types/vendors/cool-images.d.ts" />
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import store from "_/__store";
import { Provider } from "react-redux";
import AppLayout from "_layouts/app/App.layout";
import CssBaseline from "@mui/material/CssBaseline";
import { startEthereum, startUser } from "_/__startup";
import Theme from "_/__theme";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Theme>
        <CssBaseline />
        <AppLayout />
      </Theme>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);

startUser();
startEthereum();
