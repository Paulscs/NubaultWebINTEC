import { GoogleOAuthProvider } from "@react-oauth/google";
import { ProSidebarProvider } from "react-pro-sidebar";
import React from "react";
import Routes from "./Routes";

function App() {
  return (
    <ProSidebarProvider>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <Routes />
      </GoogleOAuthProvider>
    </ProSidebarProvider>
  );
}

export default App;
