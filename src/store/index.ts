// store.js
/**
 * 引入createStore 专门创建最为核心的store对象
 * 目前createStore已经弃用，所以我们要引用legacy_createStore
 */
import { legacy_createStore } from "redux";

import reducer from "./count_reducer";
const store = legacy_createStore(reducer);

export default store;
