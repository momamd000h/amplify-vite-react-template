// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Authenticator } from "@aws-amplify/ui-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import routing components
import App from "./App"; // Import your main App component
import Queue from "./Queue"; // Import the Queue component
import Experiments from "./Experiments"; // Import the Queue component
import Inter from "./inter";

import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Queue" element={<Queue />} />
          <Route path="/Experiments" element={<Experiments />} />
          <Route path="/Inter" element={<Inter />} />
        </Routes>
      </Router>
    </Authenticator>
  </React.StrictMode>
);
