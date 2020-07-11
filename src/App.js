import React from 'react';
import { ToastProvider } from "react-toast-notifications";
import SubscribeToProduct from "./Components/SubscribeToProduct";
/** Styling */
import { AppWrapper } from "./Components/Styles";
function App() {
  return (
    <AppWrapper>
      <ToastProvider placement="bottom-center">
        <SubscribeToProduct />
      </ToastProvider>
    </AppWrapper>
  );
}

export default App;
