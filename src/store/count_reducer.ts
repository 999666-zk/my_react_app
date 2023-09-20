// 约束类型
interface Eula {
  name: string;
  age?: number;
}
// 定义数据
const defaultState: Eula = {
  name: "Eula",
  age: 18,
};

// reducer 函数 用于更改数据
const reducer = (
  preState = defaultState,
  action: { type: string; data?: number }
) => {
  // action解构出来
  const { type, data } = action;
console.log(type,data,'pp')
  // 第一种写法 每个分支使用return进行返回
  // switch (type) {
  //   case "update_age":
  //     preState.age = data;
  //     return preState;
  //   case "add_age":
  //     preState.age++;
  //     return preState;
  //   case "del_age":
  //     preState.age--;
  //     return preState;
  //   default:
  //     return preState; // 初始化时
  // }

  // 第二种写法 break 与最终的return返回结果
  switch (type) {
    case "update_age":
      preState.age = data;
      break;
    case "add_age":
      preState.age != undefined ? preState.age++ : undefined;
      break;
    case "del_age":
      preState.age != undefined ? preState.age-- : undefined;
      break;
    default:
      preState; // 初始化时
  }
  return preState; // 此处 一定要使用return进行返回最终改变的值
};

export default reducer;
