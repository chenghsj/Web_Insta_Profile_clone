import uuid from "uuid/v4";
const randNum = () => Math.floor(Math.random() * 500);

const geRandArray = (Num) => {
  let randSet = new Set();
  let randArray = [];
  while (randSet.size < Num) {
    randSet.add(randNum());
  }
  randArray = [...randSet];
  return randArray;
};

const initialState = (Num) => {
  const randNumArray = geRandArray(Num);
  return randNumArray.map((value) => ({
    img: `https://source.unsplash.com/random/300x300?${value}`,
    id: uuid(),
    key: value,
  }));
};

export { initialState, randNum };

// [{},{},{},{},...]
