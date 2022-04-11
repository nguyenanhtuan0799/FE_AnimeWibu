import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "antd/dist/antd.css";
import "react-slideshow-image/dist/styles.css";
import reportWebVitals from "./reportWebVitals";
import "react-spinner-animated/dist/index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import ButtonScrollToTop from "./components/scrollToTop/ButtonScrollToTop";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ButtonScrollToTop>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </ButtonScrollToTop>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
