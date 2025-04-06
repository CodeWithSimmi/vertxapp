import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import vertexai from "./slice";
import rootSaga from "./saga";

let sagamiddleware = createSagaMiddleware();
const middleware = [sagamiddleware];

export default configureStore({
  reducer: {
    vertexai: vertexai,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middleware);
  },
})

sagamiddleware.run(rootSaga);