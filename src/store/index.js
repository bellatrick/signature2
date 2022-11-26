import {
    combineReducers,
    configureStore,
  } from "@reduxjs/toolkit";
  import storage from "redux-persist/lib/storage";
  import thunkMiddleware from "redux-thunk";
  import { persistReducer, persistStore } from "redux-persist";
  import authSlice from "./slices/auth";

  const combinedReducer = combineReducers({
    auth: authSlice.reducer,
   
  });
  const persistConfig = {
    key: "root",
    storage,
  };
  const rootReducer = (state, action) => {
    if (action.type === "LOGOUT") {
      state = {} 
    }
    return combinedReducer(state, action);
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store= configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(thunkMiddleware),
  });

  export default store;
  export const persistor = persistStore(store);
  