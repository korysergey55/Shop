import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-notifications-component/dist/theme.css";
import { BrowserRouter } from "react-router-dom";
import App from "./Components/App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import ReactNotification from "react-notifications-component";

ReactDOM.render(
 <Provider store={store}>
  <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
   <BrowserRouter>
    <ReactNotification />
    <App />
   </BrowserRouter>
  </PersistGate>
 </Provider>,
 document.getElementById("root")
);
