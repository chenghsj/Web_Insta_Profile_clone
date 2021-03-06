import React from "react";
import { useAuthContext } from "./contexts/Auth.context";

export default function PageBackground(props) {
  const [{ isDark }] = useAuthContext();
  const dark = "linear-gradient(to right bottom,#ff6a00 0%, #ee0979 100%)";
  const light = "linear-gradient(to right bottom, #89f7fe 0%, #66a6ff 100%)";

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: isDark ? dark : light,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowY: "hidden",
      }}
    ></div>
  );
}
