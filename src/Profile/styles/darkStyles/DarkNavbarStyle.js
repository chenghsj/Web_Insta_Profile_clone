import { makeStyles } from "@material-ui/core/styles";
import { styles } from "../lightStyles/NavbarStyle";

export const useDarkStyles = makeStyles((theme) => ({
  container: {
    ...styles.container,
    backgroundColor: "#2a2a2a",
  },
  icon: {
    ...styles.icon,
    color: "white",
  },
  Brand: {
    ...styles.Brand,
    color: "white",
  },
  divider: {
    ...styles.divider,
    border: "0.5px solid #fff",
  },
  title: {
    ...styles.title,
    fontWeight: "400",
    cursor: "pointer",
    color: "white",
  },
  self: {
    ...styles.self,
  },
}));
