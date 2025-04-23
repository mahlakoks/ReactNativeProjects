import { combineReducers, createStore } from "redux";
import todoReducers from "./todoReducers";



const rootReducer = combineReducers({
  ///userData: () => initialState,
  userData: () => todoReducers

});

export const store = createStore(rootReducer);
