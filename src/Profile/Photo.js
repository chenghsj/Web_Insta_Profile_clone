import React, { useState, useEffect, useContext } from "react";
import { useStyles } from "./styles/lightStyles/PhotoStyle";
import { useDarkStyles } from "./styles/darkStyles/darkPhotoStyle";
import { ThemeContext } from "../Profile/contexts/Theme.context";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import { db } from "../config/firebase.config";
import Carousel from "./Carousel";

const Photo = (props) => {
  const [open, setOpen] = useState(false);
  const [imgList, setImgList] = useState([]);
  useEffect(() => {
    db.collection("test")
      .doc(props.id)
      .collection("group")
      .onSnapshot((snapshot) =>
        setImgList(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            imgURL: doc.data().imgURL,
          }))
        )
      );
    console.log("photo");
  }, [props.id]);
  const { isDarkMode } = useContext(ThemeContext);
  const light = useStyles();
  const dark = useDarkStyles();
  const classes = isDarkMode ? dark : light;

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
          backgroundImage: `url(${props.imgURL})`,
        }}
      >
        <i
          className={classes.filterNoneIcon}
          style={{ display: `${imgList.length === 1 && "none"}` }}
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
          <Carousel imgList={imgList} />
          <h3 className={classes.lightBoxTitle}>{props.title}</h3>
          <p className={classes.lightBoxDesc}>{props.desc}</p>
        </div>
      </div>
    </>
  );
};

export default Photo;
