import AppLayout from "../layout/yaout";
import { LazyImportComponent } from "./LazyImportComponent";
import { lazy } from "react";
import { RouteObject, Navigate } from "react-router-dom";

const Home = lazy(() => import("../pages/home/index"));
const One = lazy(() => import("../pages/one"));
const Two = lazy(() => import("../pages/two"));
const Three = lazy(() => import("../pages/three"));
const Four = lazy(() => import("../pages/four"));
const Five = lazy(() => import("../pages/five"));
const Six = lazy(() => import("../pages/six/index"));
const innerOne = lazy(() => import("../pages/one/innerOne/index"));

// =====
const HomeSp = lazy(() => import("../pages/Homes/index"));

const routes: Array<RouteObject> = [
  {
    path: "/",
    // element: <AppLayout></AppLayout>,
    element: <Navigate to={"/homesp"} />,
    // children: [
    //   {
    //     path: "/home",
    //     element: <LazyImportComponent lazyChildren={Home} />,
    //   },
    //   {
    //     path: "/one",
    //     element: <LazyImportComponent lazyChildren={One} />,
    //     children: [
    //       {
    //         path: "test",
    //         element: <LazyImportComponent lazyChildren={innerOne} />,
    //       },
    //     ],
    //   },
    //   {
    //     path: "/two",
    //     element: <LazyImportComponent lazyChildren={Two} />,
    //   },
    //   {
    //     path: "/three",
    //     element: <LazyImportComponent lazyChildren={Three} />,
    //   },
    //   {
    //     path: "/four",
    //     element: <LazyImportComponent lazyChildren={Four} />,
    //   },
    //   {
    //     path: "/five",
    //     element: <LazyImportComponent lazyChildren={Five} />,
    //   },
    //   {
    //     path: "/six",
    //     element: <LazyImportComponent lazyChildren={Six} />,
    //   },

    // ],
  },
  {
    path: "/homesp",
    element: <LazyImportComponent lazyChildren={HomeSp} />,
  },
];

export default routes;
