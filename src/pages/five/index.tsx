import { FC, useRef, useState } from "react";
import store from "@/store";
import { toNumber } from "lodash";

const myList: [] = [];

const Index: FC = () => {
  const [list, setList] = useState(myList);
  const [select, setSelect] = useState<number | undefined>(1);
  const myselect = useRef<HTMLSelectElement>(null);

  console.log("store:", store);

  // 监听数据的变化
  store.subscribe(() => {
    // console.log("订阅数据的变化,我是监听器", store.getState());

    // 此处用来触发视图的更新
    setList([]);
  });

  // 改变store中的数据
  const update = () => {
    store.dispatch({ type: "update_age", data: 100 });
  };
  const add = () => {
    store.dispatch({ type: "add_age", data: select });
  };
  const del = () => {
    store.dispatch({ type: "del_age", data: select });
  };

  const handleChange = () => {
    if (myselect.current !== null) {
      setSelect(toNumber(myselect.current?.value));
    }
  };

  // 此处才是真正渲染的页面
  return (
    <div className="redux">
      <h3>redux演示</h3>
      {list}
      <button onClick={update}>更改store的数据+100</button>
      <br />
      <button onClick={add}>更改store的数据++</button>
      <br />
      <button onClick={del}>更改store的数据--</button>
      <br />

      <select ref={myselect} onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <h2>这是你选中的值:{select}</h2>

      {/* 获取store 中的数据 */}
      <p>store的num数据：{store.getState().age}</p>
      <p>store的name数据：{store.getState().name}</p>
    </div>
  );
};
export default Index;
