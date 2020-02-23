import React, { useState, useEffect } from "react";
import { initialState, randNum } from "./tileData";
import { useStyles } from "./styles/PhotoListStyle";

export default function PhotoList({ Num }) {
  const [tileData, setTileData] = useState([]);

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
            <p>{randNum()}</p>
            <i class="fas fa-comment"></i>
            <p>{randNum()}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
