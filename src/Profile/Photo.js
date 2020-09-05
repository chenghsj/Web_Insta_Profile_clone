import React, { useState, useEffect, useContext, useRef } from "react";
import { useStyles } from "./styles/lightStyles/PhotoStyle";
import { useDarkStyles } from "./styles/darkStyles/darkPhotoStyle";
import { ThemeContext } from "../Profile/contexts/Theme.context";
import { useColor } from "color-thief-react";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import Carousel from "./Carousel";

const Photo = (props) => {
  const [open, setOpen] = useState(false);
  const iconColor = useRef("");
  const { data } = useColor(props.coverImage, "rgbArray", {
    crossOrigin: "anonymous",
  });
  const { isDarkMode } = useContext(ThemeContext);
  const light = useStyles();
  const dark = useDarkStyles();
  const classes = isDarkMode ? dark : light;

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
  return (
    <>
      <div
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
        <div className={classes.mask}></div>
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
