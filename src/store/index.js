import { legacy_createStore as createStore, combineReducers } from 'redux';
import themeReducer from "./reducers/themeReducer.js";
import langReducer from "./reducers/langReducer.js";

const getDataFromStorage = () => {
  const data = localStorage.getItem('myAppData');
  if (data) {
    return JSON.parse(data);
  }
  return undefined;
};

const saveDataToStorage = (data) => {
  localStorage.setItem('myAppData', JSON.stringify(data));
};

const rootReducer = combineReducers({
    theme: themeReducer,
    language: langReducer
});

const initialState = getDataFromStorage();

export const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveDataToStorage(store.getState());
});