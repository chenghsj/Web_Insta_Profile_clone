import React from "react";
import { SortableElement } from "react-sortable-hoc";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    width: "30%",
    margin: "0.5rem",
    borderRadius: "7px",
    "&:after": {
      content: '""',
      display: "block",
      paddingBottom: "100%"
    },
    [theme.breakpoints.down("xs")]: {
      width: "45%"
    }
  },
  mask: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1rem",
    color: "white",
    backgroundColor: "black",
    borderRadius: "7px",
    opacity: 0,
    transition: "opacity 0.3s",
    "&:hover": {
      opacity: 0.8
    },
    "& p": {
      marginRight: "10px",
      marginLeft: "7px"
    }
  }
}));

const DraggablePhoto = props => {
  const classes = useStyles();
  const { like, comment } = props.randomNumber;
  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${props.photo})`
      }}
    >
      <div className={classes.mask}>
        <i class="fas fa-heart"></i>
        <p>{like}</p>
        <i class="fas fa-comment"></i>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default SortableElement(DraggablePhoto);
