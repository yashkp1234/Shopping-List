import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [thunk];

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f;
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware))
);

export default store;
