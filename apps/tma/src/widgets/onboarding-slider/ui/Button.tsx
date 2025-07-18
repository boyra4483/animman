import styles from "@animman/tma/widgets/onboarding-slider/ui/button.scss";
import arrow from "@animman/tma/shared/assets/images/icons/arrow.svg";

interface OnboardingButtonProps {
	children: React.ReactElement;
	onClick: () => void;
}

export default function Button({ children, onClick }: OnboardingButtonProps) {
	return (
		<div className={styles["button-wrapper"]}>
			{children}
			<div className={styles.btn} onClick={onClick}>
				<img className={styles["arrow"]} src={arrow} alt="arrow" />
			</div>
		</div>
	);
}
