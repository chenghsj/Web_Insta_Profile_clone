import React from "react";
import Insta from "./Profile/Insta";
import "./App.scss";
import PageBackground from "./Profile/PageBackground";
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
