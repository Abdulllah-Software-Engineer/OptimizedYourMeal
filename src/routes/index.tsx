import { Suspense, lazy, ComponentType } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// Layouts
import LoadingScreen from "../components/LoadingScreen";
import Layout from "../layout/Layout";

// Lazy-loaded components
const Loadable = <T extends Record<string, unknown>>(
  Component: ComponentType<T>
) => {
  const LoadableComponent = (props: T) => (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

  // Set the displayName of the dynamically created component
  LoadableComponent.displayName = `Loadable(${
    Component.displayName || Component.name
  })`;

  return LoadableComponent;
};

// Lazy load pages
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
