import React, { useState, useEffect } from "react";
import DraggablePhotoList from "./DraggablePhotoComponent/DragglePhotoList";
import arrayMove from "array-move";
import { initialState } from "./tileData";

export default function PhotoList({ Num }) {
  const [state, setState] = useState({ tileData: [], opened: false });

  useEffect(() => {
    setState({ tileData: initialState(Num) });
  }, [Num]);
  const { tileData } = state;
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setState(({ tileData }) => ({
      tileData: arrayMove(tileData, oldIndex, newIndex)
    }));
  };

  return (
    <div>
      <DraggablePhotoList tileData={tileData} axis="xy" onSortEnd={onSortEnd} />
    </div>
  );
}
