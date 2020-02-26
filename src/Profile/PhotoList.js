import React, { useState, useEffect } from "react";
import DraggablePhotoList from "./DragglePhotoList";
import { arrayMove } from "react-sortable-hoc";
import { initialState, randNum } from "./tileData";
import { useStyles } from "./styles/lightStyles/PhotoListStyle";

const randomNumber = {
  like: randNum(),
  comment: randNum()
};

export default function PhotoList({ Num }) {
  const [state, setState] = useState({ tileData: [] });
  // const { like, comment } = randomNumber;
  useEffect(() => {
    setState({ tileData: initialState(Num) });
  }, [Num]);
  const { tileData } = state;
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setState(({ tileData }) => ({
      tileData: arrayMove(tileData, oldIndex, newIndex)
    }));
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DraggablePhotoList
        tileData={tileData}
        randomNumber={randomNumber}
        axis="xy"
        onSortEnd={onSortEnd}
      />
    </div>
  );
}
