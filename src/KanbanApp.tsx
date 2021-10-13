import React from "react";
import { Provider } from "react-redux";
import { ModalApp } from "./ModalApp";

import { MainPage } from "./pages/MainPage";
import { store } from "./redux/store/store";

const KanbanApp = () => {
  return (
    <Provider store={store}>
      <MainPage />
      <ModalApp />
    </Provider>
  );
};

export default KanbanApp;
