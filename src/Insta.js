import React from "react";
import Navbar from "./Profile/Navbar";
import Info from "./Profile/Info";
import PhotoList from "./Profile/PhotoList";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    position: "relative",
    height: "70vh",
    width: "90vw",
    background: "#FAFAFA",
    boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.7)",
    borderRadius: "5px",
    overflowY: "scroll",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
      width: "10px"
    },
    "&::-webkit-scrollbar-thumb": {
      background: "linear-gradient(180deg, #36d1dc 0%,#5b86e5 100% )",
      height: "33%",
      // border: "1px solid rgba(0,0,0,0)",
      // backgroundClip: "padding-box",
      borderRadius: "0px 5px 5px 0px",
      margin: "5px"
    },
    "&::-webkit-scrollbar-track": {
      borderLeft: "1px solid #d6d6d7",
      borderRadius: "0px 5px 5px 0px"
    }
  },
  divider: {
    margin: "2%"
  }
}));

function Insta() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Navbar />
      <Info />
      <Divider className={classes.divider} />
      <PhotoList Num={18} />
    </div>
  );
}

export default Insta;
