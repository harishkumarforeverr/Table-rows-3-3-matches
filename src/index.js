import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.min.css";
import "antd/dist/antd.variable.min.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./index.scss";
import App from "./App";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../src/store/store";
import ConfigProviderComponent from "./ConfigProvider";



window.addEventListener("storage", () => {
  // window.location.reload(true);
  console.log(localStorage.getItem("persist:root"));
  if (localStorage.getItem("persist:root") === null) {
    console.log("inside if");
    window.location.reload(true);
  }
});

ReactDOM.render(
  <ConfigProviderComponent>
    {/* <ErrorBoundary> */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    {/* </ErrorBoundary> */},
  </ConfigProviderComponent>,
  document.getElementById("root"),
);
