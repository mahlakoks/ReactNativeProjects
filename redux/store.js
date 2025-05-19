import { createStore, applyMiddleware } from "redux";
import reducer from "./mytodo/mytoReducer";
import { mainTodoReducer } from "./mainTodo/maintodoreducer"
import { createLogger } from 'redux-logger';


const thunkMiddleware = require("redux-thunk").thunk;
const logger = createLogger();

const store = createStore(
  mainTodoReducer,
  applyMiddleware(thunkMiddleware,logger) // Apply the thunk middleware
);

export default store;
