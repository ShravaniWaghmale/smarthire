import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import App from "./App";
import AuthProvider from "./context/AuthContext";

import "./index.css";
import "@fontsource/poppins";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2500,
          style: {
            background: "#0F172A",
            color: "#fff",
            border: "1px solid rgba(255,255,255,.1)",
          },
        }}
      />
    </AuthProvider>
  </React.StrictMode>
);