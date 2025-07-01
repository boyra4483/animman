import styles from "@animman/tma/widgets/onboarding-slider/ui/onboardingSlider.scss";
import OnboardingSlides from "./OnboardingSlides";
import OnboardingText from "./OnboardingText";
import OnboardingButton from "./OnboardingButton";
import ButtonProgress from "./ButtonProgress";
import OnboardingProgress from "./OnboardingProgress";
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
    <div>
      <OnboardingSlides slide={progress} />
      <OnboardingText step={progress} />
      <section className={styles["interactive"]}>
        <OnboardingProgress step={progress} quantity={3} />
        <OnboardingButton onClick={handleClick}>
          <ButtonProgress step={progress} />
        </OnboardingButton>
      </section>
    </div>
  );
}
