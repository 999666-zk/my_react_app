import { FC, useContext, forwardRef } from "react";
import { MyContext } from "./parent";
import Small from "./small";
const Index: FC = forwardRef((props, ref) => {
  const data = useContext(MyContext);
  const { count, setCount } = data;

  const addtarget = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div style={{ width: 200, height: 200, background: "pink" }}>
        <input type="text" ref={ref} />
      </div>
      <h2>child</h2>
      <h2>parent to child:{count}</h2>
      <button style={buttonchild} onClick={addtarget}>
        child-add ++
      </button>
      <div style={{ backgroundColor: "red", padding: 20 }}>
        <Small />
      </div>
    </>
  );
});

const buttonchild = {
  color: "red",
  background: "skyblue",
  padding: "10px 20px",
  borderRadius: "4px",
};

export default Index;
