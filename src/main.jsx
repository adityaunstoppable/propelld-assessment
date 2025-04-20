import { createRoot } from "react-dom/client";
import "./index.css";
import App, { appRouter } from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import {propelldStore, persistor} from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

// Used persist state for storing data locally in localStorage so that data remains still if user reloads the page.
createRoot(document.getElementById("root")).render(
  <Provider store={propelldStore}>
    <PersistGate loading={null} persistor={persistor} >
      <RouterProvider router={appRouter}>
        <App />
      </RouterProvider>
    </PersistGate>
  </Provider>
);
