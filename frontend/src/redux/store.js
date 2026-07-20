// import { configureStore } from '@reduxjs/toolkit'
// import userSlice from "./userSlice"

// export const store = configureStore({
//   reducer: {
//     user:userSlice
//   },
// })


import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userSlice from "./userSlice"



  const rootReducer = combineReducers({
    user:userSlice,
  })



const persistConfig = {
    key: 'Webora-AI',
    version: 1,
    storage:storage.default,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
});
export const persistor = persistStore(store);
