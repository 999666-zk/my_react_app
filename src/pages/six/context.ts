import { createContext } from "react";
export const themes = {
  light: {
    color: "black",
    background: "white",
    border: "1px solid grey",
    borderRadius: "4px",
    padding:'4px'
  },
  dark: {
    color: "white",
    background: "black",
    border: "1px solid grey",
    borderRadius: "4px",
    padding:'4px'
  },
};

export const myThemes = createContext(themes);
