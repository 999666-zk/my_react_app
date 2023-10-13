import { FC, useReducer } from "react";

import { themes, myThemes } from "./context";
import Son from "./son";

import { reduce } from "./store/index";

const Index: FC = () => {
  const [state, dispach] = useReducer(reduce, themes);

  return (
    <>
      <span>my name is index</span>
      <myThemes.Provider value={{ data: state, dispach: dispach }}>
        <Son />
      </myThemes.Provider>
    </>
  );
};
export default Index;
