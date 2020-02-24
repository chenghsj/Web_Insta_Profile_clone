import React from "react";
import Insta from "./Insta";
import "./App.css";
import PageBackground from "./PageBackground";
import { ThemeProvider } from "./Profile/contexts/Theme.context";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <PageBackground></PageBackground>
        <Insta />
      </div>
    </ThemeProvider>
  );
}

export default App;
