import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";

import { authReducer } from "./Auth/auth.reducer";
import { feedReducer } from "./Feeds/feeds.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  feed: feedReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
