import { type RouteObject } from "react-router";
import rootLoader from "@animman/tma/app/route-loaders/rootLoader";

const rootRout: RouteObject = {
	path: "/",
	element: <h1>hello</h1>,
	loader: rootLoader
};

export default rootRout;
