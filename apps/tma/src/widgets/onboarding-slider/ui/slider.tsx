import styles from "@animman/tma/widgets/onboarding-slider/ui/slider.scss";
import OnboardingImage from "@animman/tma/widgets/onboarding-slider/ui/OnboardingImage";
import OnboardingText from "@animman/tma/widgets/onboarding-slider/ui/OnboardingText";
import Button from "@animman/tma/widgets/onboarding-slider/ui/Button";
import ButtonProgress from "@animman/tma/widgets/onboarding-slider/ui/ButtonProgress";
import Progress from "@animman/tma/widgets/onboarding-slider/ui/Progress";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Slider() {
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
			<OnboardingImage slide={progress} />
			<OnboardingText step={progress} />
			<section className={styles["interactive"]}>
				<Progress step={progress} quantity={3} />
				<Button onClick={handleClick}>
					<ButtonProgress step={progress} />
				</Button>
			</section>
		</>
	);
}
