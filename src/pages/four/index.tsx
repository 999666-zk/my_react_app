import { FC, useEffect, useState } from "react";
import { last } from "lodash";
import { test } from "@/utils/index";
const Index: FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  useEffect(() => {
    console.log("start");
    resCompact();
  }, []);

  const arrs = [0, 1, false, 2, "", 3];
  const resCompact = () => {
    console.log(last(arrs));
    test();
    console.log("end");
  };

  return (
    <>
      <div>
        Value: {counter}{" "}
        <button
          style={{
            padding: "10px 20px",
            background: "#f5e2bb",
            width: 100,
            borderRadius: 6,
          }}
          onClick={increment}
        >
          Increment
        </button>
      </div>
    </>
  );
};
export default Index;
