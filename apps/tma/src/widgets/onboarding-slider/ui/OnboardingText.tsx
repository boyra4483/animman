import styles from "@animman/tma/widgets/onboarding-slider/ui/onboardingText.scss";
import { Text } from "@animman/tma/widgets/onboarding-slider/model/text";
const texts: Text[] = [
  {
    title: "The biggest international and local film streaming",
    description:
      "Semper in cursus magna et eu varius nunc adipiscing. Elementum justo,laoreet id sem semper parturient.",
  },
  {
    title: "Offers ad-free viewing of high quality",
    description:
      "Semper in cursus magna et eu varius nunc adipiscing. Elementum justo,laoreet id sem semper parturient.",
  },
  {
    title: "Our service brings together your favorite series",
    description:
      "Semper in cursus magna et eu varius nunc adipiscing. Elementum justo,laoreet id sem semper parturient.",
  },
];

export default function OnboardingText({ step }: { step: number }) {
  return (
    <div className={styles.texts}>
      <p className={styles.title}>{texts[step].title}</p>
      <p className={styles["body-text"]}>{texts[step].description}</p>
    </div>
  );
}
