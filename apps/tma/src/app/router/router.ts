import { createBrowserRouter } from "react-router";
import rootRout from "@animman/tma/app/routes/root";
import onboardingRoute from "@animman/tma/app/routes/onboarding";
import authRoute from "@animman/tma/app/routes/auth";
import loginRoute from "../routes/login";
import registerRoute from "../routes/register";

const router = createBrowserRouter([
	rootRout,
	onboardingRoute,
	authRoute,
	loginRoute,
	registerRoute
]);

export default router;
