import OnboardingSlider from "@animman/tma/widgets/onboarding-slider";
import styles from "@animman/tma/pages/onboarding/ui/onboarding.module.scss";

export default function Onboarding() {
	return (
		<main className={styles.onboarding}>
			<OnboardingSlider />
		</main>
	);
}
