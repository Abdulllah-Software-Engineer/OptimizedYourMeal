import { Suspense, lazy, ComponentType } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import LoadingScreen from "../components/LoadingScreen";
import Layout from "../layout/Layout";

const Loadable = <T extends Record<string, unknown>>(
  Component: ComponentType<T>
) => {
  const LoadableComponent = (props: T) => (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

  LoadableComponent.displayName = `Loadable(${
    Component.displayName || Component.name
  })`;

  return LoadableComponent;
};

const Home = Loadable(lazy(() => import("../pages/Home")));
const Page404 = Loadable(lazy(() => import("../pages/Page404")));

const Routing = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
  ]);
};

export default Routing;
