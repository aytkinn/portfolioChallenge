import { legacy_createStore as createStore, combineReducers } from 'redux';
import themeReducer from "./reducers/themeReducer.js";
import langReducer from "./reducers/langReducer.js";
const rootReducer =combineReducers({
    theme:themeReducer,
    language:langReducer
})
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)