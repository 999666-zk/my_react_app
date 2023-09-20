import { FC, useContext } from "react";
import { MyContext } from "./parent";
const Index: FC = () => {
  const { count, setCount } = useContext(MyContext);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      smallchild
      <div style={{ width: 200, height: 200, backgroundColor: "red" }}>
        <div>{count}</div>
        <button onClick={handleClick}>add++</button>
      </div>
    </>
  );
};
export default Index;
