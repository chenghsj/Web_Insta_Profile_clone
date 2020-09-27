import React, { useState, useEffect, useRef } from "react";
import { useStyles } from "./styles/PhotoStyle";
import { useColor } from "color-thief-react";
import { db } from "../config/firebase.config";
import Carousel from "./Carousel";
import { useAuthContext } from "./contexts/Auth.context";
import {
  FilterNone as FilterNoneIcon,
  HighlightOff as HighlightOffIcon,
} from "@material-ui/icons";

const Photo = (props) => {
  const [{ user, isDark }] = useAuthContext();
  const classes = useStyles(isDark);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    const del = confirm("Are you sure to delete the post?");
    if (del) {
      db.collection(user.displayName)
        .doc(user.uid)
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
