import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import customTheme from "./theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.routes.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme} cssVarsRoot="body">
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
