import React, { useState, useEffect } from "react";
import { initialState, randNum } from "./tileData";
import { useStyles } from "./styles/lightStyles/PhotoListStyle";

export default function PhotoList({ Num }) {
  const [tileData, setTileData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState({
    like: randNum(),
    comment: randNum()
  });
  const { like, comment } = state;

  useEffect(() => {
    setTileData(initialState(Num));
  }, [Num]);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {tileData.map(tile => (
        <div
          key={tile.key}
          className={classes.gridListTile}
          style={{
            backgroundImage: `url(${tile.img})`
          }}
        >
          <div className={classes.mask}>
            <i class="fas fa-heart"></i>
            <p>{like}</p>
            <i class="fas fa-comment"></i>
            <p>{comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
