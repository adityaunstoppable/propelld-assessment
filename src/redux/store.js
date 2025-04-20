import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "./slices/dashboardSlice";
import storage from "redux-persist/lib/storage"; 
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import authSlice from "./slices/authSlice";
import toastSlice from "./slices/toastSlice";

// Configure persist for dashboard
const dashboardConfig = {
  key: "dashboard",  // key for the persist data
  storage,           // storage type (localStorage by default)
};

const authConfig = {
    key: "auth",
    storage
}

// persisting the slices (reducers) so that they are available in local storagee
const persistedDashboardReducer = persistReducer(dashboardConfig, dashboardSlice);

const persistedAuthReducer = persistReducer(authConfig, authSlice);

// configured the store according to redux toolkit syntax
const propelldStore = configureStore({
  reducer: {
    dashboard: persistedDashboardReducer,
    auth: persistedAuthReducer,
    toast: toastSlice
  },
//   this middleware is mainly used to use persist storage of redux 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,  // Disable serializableCheck for redux-persist compatibility
    }),
});

const persistor = persistStore(propelldStore);

export { persistor, propelldStore };
