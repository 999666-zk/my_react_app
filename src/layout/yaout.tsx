import { Outlet } from "react-router-dom";
import { FC } from "react";
import Header from "./Header";
const AppLayout: FC = () => {
  return (
    <>
      <div>
        <Header />
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default AppLayout;
