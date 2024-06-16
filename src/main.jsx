import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { SupabaseProvider } from "/src/integrations/supabase/index.js";

const colors = {
  brand: {
    900: "#123456",
    800: "#654321",
    700: "#abcdef",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SupabaseProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </SupabaseProvider>
  </React.StrictMode>
);
