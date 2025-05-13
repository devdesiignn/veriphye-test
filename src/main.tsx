import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo-client.ts";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster position="top-center" reverseOrder={false} />
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
