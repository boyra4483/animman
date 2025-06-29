import styles from "@animman/tma/widgets/onboarding-slider/ui/onboardingText.scss";

export default function OnboardingText() {
  return (
    <div className={styles.texts}>
      <p className={styles.title}>
        The biggest international and local film streaming
      </p>
      <p className={styles["body-text"]}>
        Semper in cursus magna et eu varius nunc adipiscing. Elementum justo,
        laoreet id sem semper parturient.
      </p>
    </div>
  );
}
