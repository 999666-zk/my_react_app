import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, MenuProps } from "antd";

import { SelectEventHandler } from "rc-menu/lib/interface";

// import
const AppLayout: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("one");
    }
  }, []);

  const onSelect: SelectEventHandler = ({ key }) => {
    if (key === "home") {
      window.open("https://learn.qingflow.com/");
    } else {
      navigate(key);
    }
  };

  const topTabs: MenuProps["items"] = [
    {
      label: "Navigation One",
      key: "one",
    },
    {
      label: "Navigation Two",
      key: "two",
    },
    {
      label: "Navigation Three",
      key: "three",
    },
    {
      label: "Navigation four",
      key: "four",
    },
    {
      label: "Navigation five",
      key: "five",
    },
  ];

  return (
    <>
      <Menu onSelect={onSelect} mode="horizontal" items={topTabs} />
    </>
  );
};

export default AppLayout;
