export const paperStyle = (theme) => ({
  outline: "none",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  width: "30%",
  [theme.breakpoints.down("xs")]: {
    width: "50%",
  },
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
  opacity: 1,
  visibility: "visible",
});

export const buttonStyle = (theme, isDark) => ({
  background: isDark ? "white" : " #191919",
  color: isDark ? "black" : "white",
  height: "100%",
  width: "max-content",
  borderRadius: "5px",
  border: "none",
  outline: "none",
  padding: "0.2rem 0.5rem",
  cursor: "pointer",
  transition: "all 0.2s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
  "&:active": {
    boxShadow: "none",
    top: "calc(6vh + 1px)",
    right: "calc(11vw - 1px)",
  },
  [theme.breakpoints.down("xs")]: {
    transform: "scale(0.85)",
    marginRight: 0,
  },
});

export const getModalStyle = () => {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
};
