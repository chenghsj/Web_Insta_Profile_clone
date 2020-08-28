import React from "react";
import DraggablePhoto from "../Photo";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
  },
}));

const DragglePhotoList = (props) => {
  const { tileData, randomNumber } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {tileData.map((tile, i) => (
        <DraggablePhoto
          index={i}
          photo={tile.img}
          key={tile.key}
          id={tile.key}
          randomNumber={randomNumber}
        />
      ))}
    </div>
  );
};

export default DragglePhotoList;
