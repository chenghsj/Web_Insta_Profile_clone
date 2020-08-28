import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

export default function Slider(props) {
  // const testArr = [1, 2, 3, 4, 5];
  const [x, setX] = useState(0);
  const classes = useStyles();

  const handleClickRight = () => {
    if (x === -100 * (props.imgList.length - 1)) return;
    else {
      setX(x - 100);
    }
  };
  const handleClickLeft = () => {
    if (x === 0) return;
    else {
      setX(x + 100);
    }
  };

  const showBtn =
    props.imgList.length > 1 ? (
      <>
        <button
          className={classes.sliderBtn}
          style={{ left: "0.5rem" }}
          onClick={handleClickLeft}
        >
          <i>
            <ArrowLeftIcon />
          </i>
        </button>
        <button
          className={classes.sliderBtn}
          style={{ right: "0.5rem" }}
          onClick={handleClickRight}
        >
          <i>
            <ArrowRightIcon />
          </i>
        </button>
      </>
    ) : null;

  return (
    <div className={classes.lightBoxImgList}>
      {props.imgList.map((img, i) => {
        return (
          <React.Fragment key={img.id}>
            <div
              className={classes.lightBoxImgList_img}
              style={{
                transform: `translateX(${x}%)`,
                backgroundImage: `url(${img.imgURL})`,
              }}
            />
            <div
              className={`indicators-${i} ${classes.indicators}`}
              style={{
                display: `${props.imgList.length === 1 && "none"}`,
                backgroundColor: i === -(x / 100) ? "#0094f4" : "#a8a8a8",
                transform: `translateX(calc(-${props.imgList.length}*75%))`,
                left: `calc(${i / 1.5}rem + 50%)`,
              }}
            />
          </React.Fragment>
        );
      })}
      {showBtn}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  lightBoxImgList: {
    display: "flex",
    width: "100%",
    height: "60%",
    overflowX: "hidden",
    position: "relative",
  },
  lightBoxImgList_img: {
    position: "relative",
    top: 0,
    backgroundSize: "contain",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    minWidth: "100%",
    height: "90%",
    boxSizing: "border-box",
    border: "1rem solid transparent",
    transition: "transform 0.5s ease",
    [theme.breakpoints.down("xs")]: {
      border: "none",
    },
  },
  indicators: {
    width: "0.4rem",
    height: "0.4rem",
    borderRadius: "50%",
    position: "absolute",
    top: "95%",
  },
  sliderBtn: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "2.5rem",
    height: "2.5rem",
    border: "none",
    borderRadius: "50%",
    background: "none",
    outline: "none",
    transition: "0.3s ease",
    "&:hover": {
      background: "lightGray",
      opacity: 0.8,
      [theme.breakpoints.down("xs")]: {
        background: "none",
      },
    },
    "& i": {
      color: "#686868",
      "&:hover": {
        color: "black",
      },
    },
  },
}));
