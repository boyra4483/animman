import { RouteObject } from "react-router";
import Register from "@animman/tma/pages/register/ui/Register";

const registerRoute: RouteObject = {
	path: "/auth/register",
	element: <Register />
};

export default registerRoute;
