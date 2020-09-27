export const initialState = {
  user: null,
  isDark: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_THEME":
      return { ...state, isDark: action.isDark };
    default:
      return state;
  }
};
