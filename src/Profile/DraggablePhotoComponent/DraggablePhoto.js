import React, { useState } from "react";
import { randNum } from "../tileData";
import { SortableElement } from "react-sortable-hoc";
import { useStyles } from "../styles/lightStyles/DraggablePhotoStyle";

const DraggablePhoto = props => {
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState({
    // open: false,
    like: randNum(),
    comment: randNum()
  });

  const { like, comment } = state;
  const classes = useStyles();

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
