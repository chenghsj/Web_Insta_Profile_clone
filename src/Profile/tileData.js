import uuid from "uuid/v4";
const randNum = () => Math.floor(Math.random() * 500);

const initialState = Num => {
  return Array(Num)
    .fill()
    .map(() => {
      let urlNum = randNum();
      return {
        img: `https://source.unsplash.com/random/300x300?${urlNum}`,
        id: uuid(),
        key: urlNum
      };
    });
};

export { initialState, randNum };
