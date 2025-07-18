import styles from "@animman/tma/widgets/onboarding-slider/ui/onboardingSlider.scss";
import OnboardingSlides from "@animman/tma/widgets/onboarding-slider/ui/OnboardingImage";
import OnboardingText from "@animman/tma/widgets/onboarding-slider/ui/OnboardingText";
import OnboardingButton from "@animman/tma/widgets/onboarding-slider/ui/Button";
import ButtonProgress from "@animman/tma/widgets/onboarding-slider/ui/ButtonProgress";
import OnboardingProgress from "@animman/tma/widgets/onboarding-slider/ui/Progress";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function OnboardingSlider() {
	const [progress, setProgress] = useState<number>(0);
	const navigate = useNavigate();

	function handleClick() {
		if (progress === 2) {
			return navigate("/auth");
		}

		setProgress(progress + 1);
	}

	return (
		<>
			<OnboardingSlides slide={progress} />
			<OnboardingText step={progress} />
			<section className={styles["interactive"]}>
				<OnboardingProgress step={progress} quantity={3} />
				<OnboardingButton onClick={handleClick}>
					<ButtonProgress step={progress} />
				</OnboardingButton>
			</section>
		</>
	);
}
