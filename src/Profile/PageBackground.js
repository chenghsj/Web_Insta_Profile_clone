import React, { useContext } from "react";
import { ThemeContext } from "./contexts/Theme.context";

export default function PageBackground(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const dark = "linear-gradient(0deg, #ee0979 0%,#ff6a00 100% )";
  const light = "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)";

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: isDarkMode ? dark : light,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowY: "hidden"
      }}
    ></div>
  );
}
