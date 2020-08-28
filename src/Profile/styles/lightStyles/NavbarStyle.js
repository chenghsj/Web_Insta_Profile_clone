import { makeStyles } from "@material-ui/core/styles";

const displayFlex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const styles = {
  container: {
    ...displayFlex,
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    left: 0,
    width: "calc(100%-5px)",
    height: "6%",
    borderRadius: 0,
    padding: "10px 20px 10px 20px",
    zIndex: 20,
  },
  icon: {
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "black",
  },
  Brand: {
    display: "flex",
    alignItems: "center",
    width: "33%",
  },
  logo: {
    height: "2rem",
  },
  divider: {
    height: "2rem",
    width: 0,
    margin: "10px",
    border: "0.5px solid #565656",
  },
  title: {
    fontFamily: "Grand Hotel",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
  self: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "33%",
    "& a": {
      marginRight: "10px",
    },
  },
};

export const useStyles = makeStyles((theme) => ({
  ...styles,
}));
