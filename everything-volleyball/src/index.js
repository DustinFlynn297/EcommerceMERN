import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import {store, persistor} from "./redux/store"
import {PersistGate} from "redux-persist/integration/react"

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);