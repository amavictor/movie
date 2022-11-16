import {applyMiddleware, compose, createStore} from "redux";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";
import {rootReducer} from "./rootReducer";

const middleWares = [logger,thunk]
const composedMiddleWares = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer,composedMiddleWares)