import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
import App from "./components/App/App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// - При логине или логауте сохранить/удалить токен в localstorage
// - При посещении страницы, если токен в localstorage есть
//   - Запрос на бекенд, отсылая токен
