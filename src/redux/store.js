import { configureStore } from "@reduxjs/toolkit";
import { allReducers, filterContactsReducer } from "./reducers/reducers";

const store = configureStore({
  reducer: {
    contacts: allReducers,
    filter: filterContactsReducer
  }
});

export default store;
