import { RouterProvider } from "react-router";
import router from "@animman/tma/app/router/router";
import "@animman/tma/app/styles/index.scss";

export default function App() {
  return <RouterProvider router={router} />;
}
