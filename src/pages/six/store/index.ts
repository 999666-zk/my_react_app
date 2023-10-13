import { ACTION_TYPE_1 } from "./interface";
import { themes } from "../context";

export const reduce = (state = themes, action: any) => {
  switch (action.type) {
    case ACTION_TYPE_1:
      return {
        ...state,
        dark: {
          color: "pink",
          background: "skyblue",
          border: "1px solid grey",
          borderRadius: "4px",
          padding: "4px",
        },
      };
    default:
      return state;
  }
};
