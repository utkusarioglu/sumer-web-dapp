/// <reference path="./types/vendors/cool-images.d.ts" />
import ReactDOM from "react-dom";
import store from "_/__store";
import { Provider } from "react-redux";
import AppLayout from "_layouts/app/App.layout";
import CssBaseline from "@mui/material/CssBaseline";
import { startEthereum, startUser } from "_/__startup";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "_/__theme";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppLayout />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

startUser();
startEthereum();
