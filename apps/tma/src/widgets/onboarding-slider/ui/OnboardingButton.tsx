import styles from "@animman/tma/widgets/onboarding-slider/ui/onboardingButton.scss";
import arrow from "@animman/tma/shared/assets/images/icons/arrow.svg";

export default function OnboardingButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles["button-wrapper"]}>
      {children}
      <div className={styles.btn}>
        <img className={styles["arrow"]} src={arrow} alt="arrow" />
      </div>
    </div>
  );
}
