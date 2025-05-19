import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "../feature/todoSplice";

const todostore = configureStore({
  reducer: {
    todo: todoreducer,
  },
});

export default todostore;
