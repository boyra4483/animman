import styles from "@animman/tma/widgets/onboarding-slider/ui/progress.scss";

interface OnboardingProgressProps {
	step: number;
	quantity: number;
}

export default function OnboardingProgress({
	step,
	quantity
}: OnboardingProgressProps) {
	return (
		<ul className={styles["progress"]}>{...getProgress(quantity, step)}</ul>
	);
}

function getProgress(quantity: number, activeStep: number) {
	const steps: React.ReactElement<HTMLLIElement>[] = [];

	for (let i = 0; i < quantity; i++) {
		const isActive = i === activeStep;
		const stepElement = (
			<li
				key={i}
				className={
					isActive ? `${styles["step"]} ${styles["active"]}` : styles["step"]
				}
			></li>
		);

		steps.push(stepElement);
	}
	return steps;
}
