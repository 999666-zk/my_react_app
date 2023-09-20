import { FC, createContext, useEffect, useRef, useState } from "react";
import Child from "./child";
import styles from "./styles.module.css";
import { propsCount } from "./interface";

// 初始值
const initialPropsCount = {
  count: 0,
  setCount: () => {},
};

export const MyContext = createContext<propsCount>(initialPropsCount);

const Index: FC = () => {
  const [count, setCount] = useState<number>(0);
  const myRef = useRef<HTMLInputElement | null>(null);
  const inputChild = useRef<HTMLInputElement | null>(null);
  const addCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("test");
  }, [count]);

  const gettargetvalue = () => {
    alert(myRef.current?.value);
  };

  const inputFacus = () => {
    inputChild.current!.focus();
  };

  return (
    <>
      <h2>parent:{count}</h2>
      <button className={styles.button} onClick={addCount}>
        add count ++
      </button>
      <hr />
      <input type="text" ref={myRef} />
      <button onClick={gettargetvalue}>click</button>
      {/* 点击我并获取焦点 */}
      <hr />
      <button onClick={inputFacus}>获取焦点</button>
      <hr />
      <MyContext.Provider value={{ count, setCount }}>
        <Child ref={inputChild} />
      </MyContext.Provider>
    </>
  );
};

export default Index;
