import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import reducer from "./modules";
import rootSaga from "./saga";

const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(logger).concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== "production",
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});
