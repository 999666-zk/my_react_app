import { FC } from "react";
import { useQuery } from "react-query";
import { NavLink, Outlet } from "react-router-dom";
import { getText } from "../../request";
import Loading from "../../components/loading";
const Index: FC = () => {
  const { data, isLoading } = useQuery("text", getText);
  // const result = useQueries([
  //   { queryKey: ["i", 1], queryFn: getText },
  //   { queryKey: ["j", 2], queryFn: getOtherText },
  // ]);
  
  const params = {
    id: "128128",
    name: "april",
  };

  if (!isLoading) {
    const { id, hitokoto, from, from_who } = data!.data;
    return (
      <>
        <ul>
          <li>{id}</li>
          <li>{hitokoto}</li>
          <li>{from}</li>
          <li>{from_who}</li>
        </ul>
        <NavLink to={`/two?id=${params.id}&name=${params.name}`}>
          点击我跳转到 two
        </NavLink>
        <Outlet />
      </>
    );
  } else {
    return <Loading />;
  }
};

export default Index;
