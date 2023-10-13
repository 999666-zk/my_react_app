import { FC, useContext } from "react";
import { myThemes } from "./context";

import { ACTION_TYPE_1 } from "./store/interface";

const Index: FC = () => {
  const { data, dispach } = useContext(myThemes);

  const handleClick = () => {
    dispach({ type: ACTION_TYPE_1 });
  };

  return (
    <>
      <span>my name is child</span>
      <button onClick={handleClick} style={data.dark}>
        child button
      </button>
    </>
  );
};

export default Index;
