import { FC, useState } from "react";
import { useParams } from "react-router-dom";

const Index: FC = () => {
  const [count, setCount] = useState(0);
  const { id, name } = useParams<{ id: string; name: string }>();
  const ontarget = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={ontarget}>click</button>
      <div style={{ width: 100, height: 100, backgroundColor: "red" }}>
        <span>我是从 one 页面传递过来的参数</span>
        <span>{id}</span>
        <span>{name}</span>
      </div>
    </>
  );
};

export default Index;
