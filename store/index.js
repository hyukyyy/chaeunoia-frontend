import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import reducer from "./modules";
import rootSaga from "./saga/index";

const makeStore = (context) =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(logger).concat(rootSaga),
    devTools: process.env.NODE_ENV !== "production",
  });

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});
