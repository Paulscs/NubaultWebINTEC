import { ProSidebarProvider } from "react-pro-sidebar";
import React from "react";
import Routes from "./Routes";
import { LoanProvider } from './contexts/LoanContext';

function App() {
  return (
    <ProSidebarProvider>
      <Routes />
    </ProSidebarProvider>
  );
}

export default App;
