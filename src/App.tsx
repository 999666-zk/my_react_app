import type { FC } from "react";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/reset.css";

//主题色
const myTheme = {
  token: {
    colorPrimary: "#FB9337",
    borderRadius: 2,
  },
};
const App: FC = () => (
  <BrowserRouter>
    <ConfigProvider theme={myTheme} locale={zhCN}>
      <Router></Router>
    </ConfigProvider>
  </BrowserRouter>
);

export default App;
