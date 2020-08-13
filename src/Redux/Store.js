import { createStore, applyMiddleware } from "redux";
import AnyCategoryReducers from "./AnyCategory/AnyCategoryReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
export const store = createStore(
  AnyCategoryReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
store.subscribe(() => {
  console.log(store.getState());
});
