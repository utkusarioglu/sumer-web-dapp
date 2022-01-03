/// <reference path="./types/vendors/cool-images.d.ts" />
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import store from "_/__store";
import { Provider } from "react-redux";
import AppLayout from "_layouts/app/App.layout";
import CssBaseline from "@mui/material/CssBaseline";
import Theme from "_/__theme";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallbackView from "_views/error-fallback/ErrorFallback.view";
import { HelmetProvider } from "react-helmet-async";
import { startEthereum, startUser } from "_/__startup";

ReactDOM.render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallbackView}>
      <Provider store={store}>
        <Theme>
          <CssBaseline />
          <HelmetProvider>
            <BrowserRouter>
              <AppLayout />
            </BrowserRouter>
          </HelmetProvider>
        </Theme>
      </Provider>
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById("root")
);

startUser();
startEthereum();
