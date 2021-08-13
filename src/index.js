import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./Components/App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
 <Provider store={store}>
  <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
   <BrowserRouter>
    <App />
   </BrowserRouter>
  </PersistGate>
 </Provider>,
 document.getElementById("root")
);
