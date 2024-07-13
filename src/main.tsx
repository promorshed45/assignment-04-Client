import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { persistor, store } from "./redux/store.ts";
import { Provider } from "react-redux";
import router from "./routes/Route.tsx";
import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}> 
      <Toaster position="top-right" expand={true} richColors/>
      <RouterProvider router={router} />
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
