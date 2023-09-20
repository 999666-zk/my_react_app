import { FC } from "react";
import  Parent  from "../../components/parent";
import { NavLink } from "react-router-dom";
const Index: FC = () => {
  return (
    <>
      three
      <Parent />
      <NavLink to={'/one/test'}>to test</NavLink>
    </>
  );
};

export default Index;
