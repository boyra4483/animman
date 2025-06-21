import { createBrowserRouter } from "react-router";
import rootRout from "@animman/tma/app/routes/root";
import { onboardingRoute } from "../routes/onboarding";

const router = createBrowserRouter([rootRout, onboardingRoute]);

export default router;
