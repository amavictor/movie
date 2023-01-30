import {applyMiddleware, compose, createStore} from "redux";
import {logger} from "redux-logger/src";
import { persistStore, persistReducer} from "redux-persist";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: [],
    blacklist: [' trendingMovies','allMovies','user','likes']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const middleWares = [process.env.NODE_ENV === "development" && logger, thunk].filter(Boolean)

const composeEnhancers = (
    process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose

const componsedEnhancers = composeEnhancers(applyMiddleware(...middleWares))
export const store = createStore(persistedReducer, undefined, componsedEnhancers)
export const persistor = persistStore(store)