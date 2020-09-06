import React, { useState, useEffect, useContext, useRef } from "react";
import { useStyles } from "./styles/PhotoStyle";
import { ThemeContext } from "../Profile/contexts/Theme.context";
import { useColor } from "color-thief-react";
import { db } from "../config/firebase.config";
import { AuthContext } from "./contexts/Auth.context";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import Carousel from "./Carousel";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const Photo = (props) => {
  const { isDarkMode } = useContext(ThemeContext);
  const { isAuth } = useContext(AuthContext);
  const classes = useStyles(isDarkMode);
  const [open, setOpen] = useState(false);
  const iconColor = useRef("");
  const { data } = useColor(props.coverImage, "rgbArray", {
    crossOrigin: "anonymous",
  });

  const setColorContrast = (color) => {
    if (color) {
      const brightness = Math.round(
        (parseInt(color[0]) * 299 +
          parseInt(color[1]) * 587 +
          parseInt(color[2]) * 114) /
          1000
      );
      return brightness > 125 ? "black" : "white";
    }
    return;
  };

  useEffect(() => {
    iconColor.current.style.color = setColorContrast(data);
  });

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    if (e.target !== e.currentTarget) return;
    setOpen(false);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    // eslint-disable-next-line no-restricted-globals
    const del = confirm("Are you sure to delete the item?");
    if (del) {
      db.collection(isAuth.displayName)
        .doc(isAuth.uid)
        .collection("posts")
        .doc(props.id)
        .delete()
        .then(() => {
          console.log("Successfully deleted");
        })
        .catch((error) => error.message);
    }
    return;
  };

  return (
    <>
      <div
        onContextMenu={(e) => e.preventDefault()}
        onClick={handleClick}
        className={classes.root}
        style={{
          backgroundImage: `url(${props.coverImage})`,
        }}
      >
        <i
          ref={iconColor}
          className={classes.filterNoneIcon}
          style={{
            display: `${props.images.length === 1 && "none"}`,
            color: iconColor,
          }}
        >
          <FilterNoneIcon />
        </i>
        <div className={classes.mask}>
          <HighlightOffIcon
            className={classes.highlightOffIcon}
            onClick={handleDelete}
          />
        </div>
      </div>
      <div
        onClick={handleClose}
        className={
          open ? `${classes.lightBox} ${classes.active}` : `${classes.lightBox}`
        }
      >
        <div className={classes.lightBoxContainer}>
          <Carousel imgList={props.images} />
          <h3 className={classes.lightBoxTitle}>{props.title}</h3>
          <p className={classes.lightBoxDesc}>{props.desc}</p>
        </div>
      </div>
    </>
  );
};

export default Photo;
