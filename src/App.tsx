import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./router";

// router/index.tsから直接ルーター作成
const routerElements = routes.map((route) => ({
  path: route.path,
  element: <route.element />,
}));

const router = createBrowserRouter(routerElements);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
