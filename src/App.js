import React from "react";
import Insta from "./Profile/Insta";
import "./App.scss";
import PageBackground from "./Profile/PageBackground";
import { ThemeProvider } from "./Profile/contexts/Theme.context";
import { AuthProvider } from "./Profile/contexts/Auth.context";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <div className="App">
          <PageBackground></PageBackground>
          <Insta />
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
